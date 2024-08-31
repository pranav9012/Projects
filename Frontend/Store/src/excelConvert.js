import pg from 'pg';
import { formattedItems } from "./items.js";
const { Pool } = pg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Loong',
  password: 'admin',
  port: 5432,
});

const table_name = 'loong_items';

// Create the table if it doesn't exist
pool.query(`
  CREATE TABLE IF NOT EXISTS ${table_name} (
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    image TEXT[] NOT NULL,
    color_name TEXT[] NOT NULL,
    color TEXT[] NOT NULL,
    cost DECIMAL(10, 2) NOT NULL,
    category VARCHAR(255) NOT NULL,
    store VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
  );
`).then(() => {
  // Loop through the formatted items and insert each row into the table
  Object.keys(formattedItems).forEach((title) => {
    const item = formattedItems[title];

    const query = {
      text: `
        INSERT INTO ${table_name} (
          title,
          image,
          color_name,
          color,
          cost,
          category,
          store,
          description
        ) VALUES (
          $1,
          $2,
          $3,
          $4,
          $5,
          $6,
          $7,
          $8
        );
      `,
      values: [
        title,
        item.image,
        item.color_name,
        item.color,
        item.cost,
        item.category,
        item.store,
        item.description,
      ],
    };

    pool.query(query).then((result) => {
      console.log(`Inserted row for ${title}`);
    }).catch((error) => {
      console.error(`Error inserting row for ${title}: ${error}`);
    });
  });
}).catch((error) => {
  console.error(`Error creating table: ${error}`);
});



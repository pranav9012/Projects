import pg from 'pg';
const { Pool } = pg;


function init_db(){

    const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Loong',
    password: 'admin',
    port: 5432,
    });

    pool.connect()


    return pool;
}

export default init_db;
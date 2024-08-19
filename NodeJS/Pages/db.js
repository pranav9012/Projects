import pg from 'pg';
import secrets from './secrets.js';
function init_db(){
    const db = new pg.Client({
        user: secrets.user,
        host: secrets.host,
        database: secrets.database,
        password: secrets.password,
        port: secrets.port,
    });

    db.connect();
    // db.query("SELECT * from users", (err, res) =>{
    //     if(err) throw err;
    //     console.log("Connected to PostgreSQL");
    //     res.rows.forEach(row => {
    //         console.log(row.email);
    //         console.log(row.password);
    //     });
    // })
    return db;
};

export default init_db;
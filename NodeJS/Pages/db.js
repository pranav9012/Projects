import pg from 'pg';
function init_db(){
    const db = new pg.Client({
        user: 'postgres',
        host: 'localhost',
        database: 'Pages',
        password: 'admin',
        port: 5432,
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
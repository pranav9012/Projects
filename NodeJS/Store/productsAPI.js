import init_db from "./db.js";


async function getAllProducts(){
    let db_handler = init_db();
    try{
        let result = await db_handler.query("SELECT * FROM loong_items");
        db_handler.end();
        return result.rows;
    } catch {
        console.error("Error fetching products:", err);
        db_handler.end();
        return {};
    }
}

async function getOneProduct(store, title){
    let db_handler = init_db();
    try{
        let result = await db_handler.query("SELECT * FROM loong_items WHERE store = $1 AND title = $2", [store, title]);
        db_handler.end();
        return result.rows[0];
    } catch {
        console.error("Error fetching product:", err);
        db_handler.end();
        return {};
    }
}


export default getAllProducts;
export { getOneProduct };

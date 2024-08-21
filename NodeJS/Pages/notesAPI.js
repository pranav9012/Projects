import init_db from "./db.js";

async function getNotes(user_id){
    let db_handler = init_db();
    try{
        const result = await db_handler.query("SELECT * FROM pages WHERE user_id = $1 ORDER BY edited_at DESC", [user_id]);
        db_handler.end();
        return result.rows;
    } catch{
        console.error("Failed to retrieve notes");
        db_handler.end();
        return [{title: "Error", content: "Failed to retrive data"}];
    }

}

async function addNote(user_id, title, content){
    let db_handler = init_db();
    try{
        console.log(user_id, title, content);
        await db_handler.query("INSERT INTO pages (user_id, title, content) VALUES ($1, $2, $3)", [user_id, title, content]);
        db_handler.end();
        return 1;
    } catch{
        console.error("Failed to add note");
        db_handler.end();
        return -1;
    }
}

async function deleteNote(user_id, note_id){
    let db_handler = init_db();
    try{
        // console.log(user_id, note_id);
        await db_handler.query("WITH to_delete AS (SELECT * FROM pages WHERE user_id = $1 ORDER BY created_at DESC OFFSET $2 LIMIT 1) DELETE FROM pages WHERE page_id IN (SELECT page_id FROM to_delete)", [user_id, note_id - 1]);
        return 1;
    } catch{
        console.error("Failed to delete note");
        db_handler.end();
        return -1;
    }
}

async function updateTitle(note_id, user_id, title){
    let db_handler = init_db();
    try{
        console.log(user_id + " : " + note_id  + " : " + title);
        await db_handler.query("WITH to_update AS (SELECT * FROM pages WHERE user_id = $1 ORDER BY created_at DESC OFFSET $2 LIMIT 1) UPDATE pages SET title = $3 WHERE page_id IN (SELECT page_id FROM to_update)", [user_id, note_id - 1, title]);
        db_handler.end();
        return 1;
    } catch{
        console.error("Failed to update title");
        db_handler.end();
        return -1;
    }

}

async function updateContent(note_id, user_id, content){
    let db_handler = init_db();
    try{
        console.log(user_id + " : " + note_id  + " : " + content);
        await db_handler.query("WITH to_update AS (SELECT * FROM pages WHERE user_id = $1 ORDER BY created_at DESC OFFSET $2 LIMIT 1) UPDATE pages SET content = $3 WHERE page_id IN (SELECT page_id FROM to_update)", [user_id, note_id - 1, content]);
        db_handler.end();
        return 1;
    } catch{
        console.error("Failed to update title");
        db_handler.end();
        return -1;
    }
}

export default getNotes;
export { addNote, deleteNote, updateContent, updateTitle };


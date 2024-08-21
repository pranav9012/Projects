import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import multer from 'multer';
import { loginResponse, registerUser } from './formHandler.js';
import getNotes, { addNote, deleteNote, updateContent, updateTitle } from './notesAPI.js';

const app = express();
const port = 3000
const upload = multer();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors());

app.post('/login', upload.none(), async (req, res) => {
    const {email, password} = req.body;
    return await loginResponse(email, password, res);
});

app.post('/register',upload.none(), async (req, res) => {
    const { email, password } = req.body;
    return await registerUser(email, password, res);
});

app.get('/notes/:user_id', async (req, res) => {
    const user_id = req.params.user_id;
    console.log(user_id);
    const notes = await getNotes(user_id);
    console.log(notes);
    return res.json({pages: notes});
});

app.post('/addnote/:user_id', async (req, res) => {
    const user_id = req.params.user_id;
    const { title, content } = req.body;
    console.log(title, content);
    const status = await addNote(user_id, title, content);
    console.log(status);
    if(status === 1) return res.status(201).json({ message: 'Note added successfully' });
    else if(status === -1) return res.status(502).json({ message: 'Bad Gateway' });
    else return res.status(500).json({ message: 'Internal Server Error' });
})

app.delete('/deletenote/:user_id/:note_id', async (req, res) => {
    const { note_id, user_id } = req.params;
    console.log(note_id, user_id);
    const status = await deleteNote(user_id, note_id);
    console.log(status);
    if(status === 1) return res.status(200).json({ message: 'Note deleted successfully' });
    else if(status === -1) return res.status(502).json({ message: 'Bad Gateway' });
    else return res.status(500).json({ message: 'Internal Server Error' });
})

app.patch('/updatetitle/:user_id/:note_id', async (req, res) => {
    const {note_id, user_id} = req.params;
    console.log(note_id, user_id);
    const {title} = req.body;
    console.log(title);
    const status = await updateTitle(note_id, user_id, title);
    console.log(status);
    if(status === 1) return res.status(200).json({ message: "Note's title updated successfully" });
    else if(status === -1) return res.status(502).json({ message: 'Bad Gateway' });
    else return res.status(500).json({ message: 'Internal Server Error' });
})

app.patch('/updatecontent/:user_id/:note_id', async (req, res) => {
    const {note_id, user_id} = req.params;
    console.log(note_id, user_id);
    const {content} = req.body;
    console.log(content);
    const status = await updateContent(note_id, user_id, content);
    console.log(status);
    if(status === 1) return res.status(200).json({ message: "Note's content updated successfully" });
    else if(status === -1) return res.status(502).json({ message: 'Bad Gateway' });
    else return res.status(500).json({ message: 'Internal Server Error' });
})
app.listen(port, () =>{
    console.log(`Server Running on port ${port}`);
});
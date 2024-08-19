import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import multer from 'multer';
import { loginResponse, registerUser } from './formHandler.js';


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

app.listen(port, () =>{
    console.log(`Server Running on port ${port}`);
});
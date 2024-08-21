import bcrypt from 'bcrypt';
import { validate } from 'email-validator';
import init_db from "./db.js";

const saltRounds = 10;

async function hashPasswordfunc(password){
    try {
        const hashPassword = await bcrypt.hash(password, saltRounds);
        // console.log(hashPassword + " password here");
        return hashPassword;
    } catch (err) {
        console.error(err);
        return "-1"; // Return "-1" in case of an error
    }
}

function alreadyRegisteredUser(email){
    return new Promise((resolve, reject) => {
    let db_handler = init_db();
    db_handler.query("SELECT * FROM users WHERE email = $1", [email], (err, res) => {
        if (err){
            console.error(err);
            db_handler.end();
            reject(-1);
        }
        if (res.rowCount > 0) {
            db_handler.end();
            resolve(1);
        } else {
            db_handler.end();
            resolve(0);
        }
    });
    });
}
async function addUser(email, password) {
    return new Promise(async (resolve, reject) => {
        let db_handler = init_db();
        let userId = -1;
        
        try {
            const hash = await hashPasswordfunc(password); // Await the password hashing
            if (hash === "-1") {
                db_handler.end();
                return reject([-1, null]);
            }

            // Insert the new user into the database
            db_handler.query("INSERT INTO users (email, password) VALUES ($1, $2) RETURNING user_id", [email, hash], (err, res) => {
                if (err) {
                    console.error(err);
                    db_handler.end();
                    return reject([-1, null]);
                }

                // If the insert was successful, we now query the user ID
                userId = res.rows[0].user_id; // Assuming the `id` column is returned from the insert
                resolve([1, userId]);
                db_handler.query("INSERT INTO pages (user_id, title, content) VALUES ($1, $2, $3)", [userId, 'First Page', 'This is the beginning of your Pages'], (err, res) => {
                if (err) {
                    console.error(err);
                    db_handler.end();
                    return reject([-1, null]);
                }
                resolve([1, userId]);
                db_handler.end();
            });
        });

        } catch (error) {
            console.error("Error while hashing password", error);
            db_handler.end();
            reject([-1, null]);
        }
    });
}



async function validateLogin(email, password) {
    return new Promise((resolve, reject) => {
        let db_handler = init_db();
        
        // Query database for user with the provided email
        db_handler.query("SELECT * FROM users WHERE email = $1", [email], async (err, res) => {
            if (err) {
                console.error(err);
                db_handler.end();
                return reject([-1, -1]); // Query failed
            }

            if (res.rowCount > 0) {
                const user = res.rows[0];
                const storedHash = user.password;
                const user_id = user.user_id;
                // console.log(storedHash);

                try {
                    // Compare the provided password with the stored hash
                    const passwordMatch = await bcrypt.compare(password, storedHash);
                    
                    if (passwordMatch) {
                        db_handler.end();
                        return resolve([1, user_id]); // Password matches
                    } else {
                        db_handler.end();
                        return resolve([0, null]); // Password does not match
                    }
                } catch (err) {
                    console.error(err);
                    db_handler.end();
                    return reject([-1, -1]); // bcrypt comparison failed
                }
            } else {
                db_handler.end();
                return resolve([0, null]); // User not found
            }
        });
    });
}


async function loginResponse(email, password, res){
    try{
        if(validate(email)){
            let [status, user_id] = await validateLogin(email, password);
            // console.log(status);
            console.log(status, user_id);
            if(status === 1)  return res.status(200).json({ message: 'Login Successful', user_id: user_id});
            else if(status === 0)  return res.status(401).json({ message: 'Incorrect Email or Password' });
            else if(status === -1)  return res.status(502).json({message: 'Bad Gateway'});
        }
        else{
            return res.status(400).send({ message: 'Invalid Email' });
        }
    }catch{
        return res.status(500).send({ message: 'Internal Server Error' });
    }
}

async function registerUser(email, password, res){
    try{
        if(validate(email)){
            let status = await alreadyRegisteredUser(email);
            // console.log(status + 'status');
            if(status === 1)  return res.status(400).json({ message: 'User already registered' });
            else if(status === -1)  return res.status(502).json({message: 'Bad Gateway'});
            else if(status === 0){
                // console.log("inside status code");
                let [addStatus, user_id] = await addUser(email, password);
                // console.log("below add user");
                // console.log(addStatus + 'addStatus');
                if(addStatus === -1)    return res.status(502).json({message: 'Bad Gateway'});
                else if(addStatus === 1){
                    // getNotes(user_id);
                    return res.status(201).json({ message: 'User created successfully', user_id: user_id });
                }
            }
        }
        else{
            return res.status(400).json({ message: 'Invalid Email' });
        }
    }catch{
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export { loginResponse, registerUser };


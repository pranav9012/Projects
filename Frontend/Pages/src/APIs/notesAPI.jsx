import axios from "axios";

const fetchNotes = async(setNotes, user_id) => {
    try{
        console.log(user_id + "first time");
        const res = await axios.get(`http://localhost:3000/notes/${user_id}`, {timeout: 3000});
        console.log(user_id);
        console.log(res.data.pages);
        setNotes(res.data.pages);
    } catch{
        console.log('Error fetching notes');
    }
}

const addNote = async(newNote, user_id) =>{
    try{
        const res = await axios.post(`http://localhost:3000/addnote/${user_id}`, newNote, {timeout: 3000});
        console.log(res.status + " : " + res.data.message);
        return res.status;
    } catch (error) {
        if(error.response){
          console.log(error.response.status + " : " + error.response.data.message);
          return error.response.status;
        } else if(error.request) {
          console.log("No request made");
          return 500;
        } else {
          console.log("Error connecting to server");
          return 502; // Server error
        }
    }
}

const deleteNote = async(note_id, user_id) => {
    try{
        console.log(note_id, user_id);
        const res = await axios.delete(`http://localhost:3000/deletenote/${user_id}/${note_id}`, {timeout: 3000});
        console.log(res.status + " : " + res.data.message);
        return res.status;
    } catch (error) {
        if(error.response){
          console.log(error.response.status + " : " + error.response.data.message);
          return error.response.status;
        } else if(error.request) {
          console.log("No request made");
          return 500;
        } else {
          console.log("Error connecting to server");
          return 502; // Server error
        }
    }
}

const updateTitle = async(note_id, user_id, title) => {
  try{
        console.log(note_id, user_id, title);
        const res = await axios.patch(`http://localhost:3000/updatetitle/${user_id}/${note_id}`, {title: title}, {timeout: 3000});
        console.log(res.status + " : " + res.data.message);
        return res.status;
    } catch (error) {
        if(error.response){
          console.log(error.response.status + " : " + error.response.data.message);
          return error.response.status;
        } else if(error.request) {
          console.log("No request made");
          return 500;
        } else {
          console.log("Error connecting to server");
          return 502; // Server error
        }
    }
}

const updateContent = async(note_id, user_id, content) => {
  try{
        console.log(note_id, user_id, content);
        const res = await axios.patch(`http://localhost:3000/updatecontent/${user_id}/${note_id}`, {content: content}, {timeout: 3000});
        console.log(res.status + " : " + res.data.message);
        return res.status;
    } catch (error) {
        if(error.response){
          console.log(error.response.status + " : " + error.response.data.message);
          return error.response.status;
        } else if(error.request) {
          console.log("No request made");
          return 500;
        } else {
          console.log("Error connecting to server");
          return 502; // Server error
        }
    }
}

export default fetchNotes;
export { addNote, deleteNote, updateContent, updateTitle };


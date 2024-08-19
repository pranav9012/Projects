import axios from 'axios';

const onRegisterSubmit = async(formData) => {
    try{
        const res = await axios.postForm('http://localhost:3000/register', formData, {timeout: 5000});
        console.log(res.status + " : " + res.data.message + " : " + res.data.user_id);
        return res.status;
    } catch(error) {
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
};

export default onRegisterSubmit;
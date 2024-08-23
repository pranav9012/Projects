import axios from 'axios';

const onLoginSubmit = async (formData) => {
  try {
      const res = await axios.postForm('http://localhost:3000/login', formData, {timeout: 5000,  withCredentials: true});
      console.log(res.status + " : " + res.data.message + " : " + res.data.user_id);
      return [res.status, res.data.user_id];
  } catch (error) {
      if(error.response){
        console.log(error.response.status + " : " + error.response.data.message);
        return [error.response.status, -1];
      } else if(error.request) {
        console.log("No request made");
        return [500, -1];
      } else {
        console.log("Error connecting to server");
        return [502, -1]; // Server error
      }
  }
};


export default onLoginSubmit;
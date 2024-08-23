import axios from "axios";

const fetchCSRF = async () =>{
    try{
        const res = await axios.get('/csrf-token', {timeout: 3000,  withCredentials: true});
        console.log(res.data.csrfToken + " inside csrf");
        return res.data.csrfToken;
    } catch {
        console.log('Error fetching CSRF token');
    }
}

export default fetchCSRF;
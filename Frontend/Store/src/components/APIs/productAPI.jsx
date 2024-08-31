import axios from "axios";
// axios.defaults.withCredentials = true;

const fetchProducts = async () =>{
    try{
        const res = await axios.get('http://localhost:3000/all-products', {timeout : 2000});
        console.log(res.status + " : " + res.data.message + " : " + res.data.data);
        return res.data.data;
    }catch(error){
        console.error('Error fetching products:', error);
        alert(`Error fetching products: ${error}`);
        return {}
    }
}

const getOneProduct = async (title, store) =>{
    try{
        console.log(title + " : " + store);
        const res = await axios.get(`http://localhost:3000/${store}/${title}`, {timeout : 2000});
        console.log(res.status + " : " + res.data.message + " : " + res.data.data);
        return res.data.data;
    }catch(error){
        console.error('Error fetching product:', error);
        alert(`Error fetching product: ${error}`);
        return {}
    }
}

export default fetchProducts;
export { getOneProduct };

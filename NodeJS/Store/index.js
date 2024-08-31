import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import getAllProducts, { getOneProduct } from './productsAPI.js';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));

app.get('/all-products', async (req, res) => {
    try {
        const products = await getAllProducts();
        res.status(200).json({data: products, message: 'Fetch Successful'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching products', data: []});
    }
});

app.get('/:store/:title', async (req, res) => {
    const { store, title } = req.params;
    console.log(store + " : " + title);
    try {
        const product = await getOneProduct(store, title);
        if (!product) {
            return res.status(404).json({ message: 'Product not found', data: []});
        }
        res.status(200).json({ data: product, message: 'Fetch Successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching product', product: []});
    }
})


app.listen(port, () =>{
    console.log(`Server Running on port ${port}`);
});
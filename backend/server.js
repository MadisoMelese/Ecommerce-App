import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';


dotenv.config();
const app = express();
app.use(express.json());


app.post('/api/product', async (req, res) => {
  const product = req.body;

  if(!product.name || !product.price || !product.image ){
    return res.status(400).json({success:false, message: 'please provide product details'});
  }
 const newProduct = new Product(product);
  try{
    await newProduct.save();
    res.status(201).json({success:true, data: newProduct});
  }catch(error){
    console.error(error);
    res.status(500).json({success:false, message: 'server error'});
  }
})

// Get all products
app.get('/api/products', async (req, res) => {
  try{
    const products = await Product.find();
    res.json({success:true, data: products});
  }catch(error){
    console.error(error);
    res.status(400).json({success:false, message: 'No product found'});
  }
})
// Get a product by ID
app.get('/api/products/:id', async (req, res) => {
  try{
    const product = await Product.findById(req.params.id);
    res.json({success:true, data: product});
  }catch(error){
    console.error(error);
    res.status(400).json({success:false, message: 'This product not found'});
  }
})

// Update a product
app.put('/api/products/:id', async (req, res) => {
  // const id = req?.body?.id;
  const product = req.body;
  if(!product.name || !product.price || !product.image ){
    return res.status(400).json({success:false, message: 'please provide product details'});
  }
  try{
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, product, {new:true});
    res.json({success:true, data: updatedProduct});
  }catch(error){
    console.error(error);
    res.status(400).json({success:false, message: 'This product not found'});
  }
})

// Delete a product
app.delete('/api/products/:id', async (req, res) => {
  try{
    const product = await Product.findById(req.params.id);
    if(product){
      await product.remove();
      res.json({success:true, message: 'Product removed'});
    }
  }catch(error){
    console.error(error);
    res.status(400).json({success:false, message: 'This product not found'});
  }
})

app.listen(5000, ()=>{
  connectDB();
  console.log('Server started at http://localhost:5000');
})

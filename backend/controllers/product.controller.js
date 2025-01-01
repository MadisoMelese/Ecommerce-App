import Product from '../models/product.model.js';
import mongoose from 'mongoose';

// Get all products
const getAllProducts = async (req, res) => {
  try{
    const products = await Product.find();
    res.json({success:true, data: products});
  }catch(error){
    // console.error(error);
    res.status(500).json({success:false, message: 'Server error'});
  }
}

// Get single product by id
const getProduct = async (req, res) => {
  const id = req.params.id;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({success:false, message: 'Invalid product id'});
  }
  try{
    const product = await Product.findById(id);
    res.status(200).json({success:true, data: product});
  }catch(error){
    // console.error(error);
    res.status(400).json({success:false, message: 'This product not found'});
  }
}

// Post a new product
const postNewProduct = async (req, res) => {
  const product = req.body;
  if(!product.name || !product.price || !product.image ){
    return res.status(400).json({success:false, message: 'please provide product details'});
  }
 const newProduct = new Product(product);
  try{
    await newProduct.save();
    res.status(201).json({success:true, data: newProduct});
  }catch(error){
    // console.error(error);
    res.status(500).json({success:false, message: 'server error'});
  }
}


// Update a product the existing product
const updateProduct = async (req, res) => { //the d/ce b/n
  const id = req.params.id;
  const product = req.body;
  if(!product.name || !product.price || !product.image ){
    return res.status(400).json({success:false, message: 'please provide product details'});
  }
  try{
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true});
    res.status(200).json({success:true, data: updatedProduct});
  }catch(error){
    // console.error(error);
    res.status(400).json({success:false, message: 'This product not found'});
  }
}

// Delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({success:false, message: 'Invalid product id'});
  }
  try{
    const product = await Product.findById(id);
    if(product){
      await product.deleteOne();
      res.status(200).json({success:true, message: 'Product deleted successfully'});
    }
  }catch(error){
    // console.error(error);
    res.status(500).json({success:false, message: 'server error'});
  }
}

export { getAllProducts, getProduct, postNewProduct, updateProduct, deleteProduct };
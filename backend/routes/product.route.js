import express from "express";
import {
  getAllProducts,
  getProduct,
  postNewProduct,
  updateProduct,
  deleteProduct
} from '../controllers/product.controller.js';

const router = express.Router();


router.get('/', getAllProducts)
router.get('/:id', getProduct)
router.post('/', postNewProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router;
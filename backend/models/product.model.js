import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  image:{
    type:String,
    required: true
  }
},{
  timestamps: true // this will automatically add the created_at and updated_at field
})

const product = mongoose.model('Product', productSchema)
export default product;
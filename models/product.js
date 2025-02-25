import mongoose from "mongoose";
const ProductSchema = mongoose.Schema({
    name:String,
    age:Number,
    phone:String
},
{
    timestamps:true
}
)
const ProductModel = mongoose.model('products',ProductSchema)
export default ProductModel
import ProductModel from "../models/product.js";
export const getAllProduct = async(req , res)=>{
    try {
        const products = await ProductModel.find()
        return res.status(200).json({status:true,data:products})
    } catch (error) {
        return res.status(503).json({status:false,message:'Lỗi'})
    }
}
export const getProductById = async(req , res)=>{
    try {
        const id  = req.params.id
        const products = await ProductModel.find({_id:id})
        return res.status(200).json({status:true,data:products})
    } catch (error) {
        return res.status(503).json({status:false,message:'Lỗi'})
    }
}
export const addProduct = async(req , res)=>{
    try {
        const body  = req.body
        const productmodel = new ProductModel(body)
        const products = await productmodel.save()
        return res.status(200).json({status:true,data:products,message:"Thêm thành công"})
    } catch (error) {
        return res.status(503).json({status:false,message:'Lỗi'})
    }
}
export const UpdateProduct = async(req , res)=>{
    try {
        const body  = req.body
        const id  = req.params.id
        const products = await ProductModel.findOneAndUpdate({_id:id},body,{new:true})
        return res.status(200).json({status:true,data:products,message:"Cập nhật thành công"})
    } catch (error) {
        return res.status(503).json({status:false,message:'Lỗi'})
    }
}
export const DeleteProduct = async(req , res)=>{
    try {
        const body  = req.body
        const id  = req.params.id
        const products = await ProductModel.findOneAndDelete({_id:id})
        return res.status(200).json({status:true,data:products,message:"Xoá thành công"})
    } catch (error) {
        return res.status(503).json({status:false,message:'Lỗi'})
    }
}

// router.get('/products',getAllProduct)
// router.get('/products/:id',getProductById)
// router.post('/products',addProduct)
// router.put('/products/:id',UpdateProduct)
// router.delete('/products/:id',DeleteProduct)
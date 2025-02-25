import UserModel from "../models/auth.js";
import bcrypt from 'bcryptjs'
export const Register = async(req , res)=>{
    try {
        const body  = req.body
        body.password = await bcrypt.hash(body.password,10)
        const usermodel = new UserModel(body)
        const users = await usermodel.save()
        return res.status(200).json({status:true,data:users,message:"Đăng ký thành công"})
    } catch (error) {
        return res.status(503).json({status:false,message:'Lỗi'})
    }
}
export const Login = async(req , res)=>{ 
    try {
        const body  = req.body
        const users = await UserModel.findOne({email:body.email});
        if(users===null){
        res.send({message:"Không tìm thấy tài khoản"})
        }else{
            const verify = await bcrypt.compare(body.password,users.password)
            if(verify){
                const token = await jwt.sign({id:users._id},'123456') 
                res.send({status:true,message:"Đăng nhập thành công",token:token})
            }else{
                res.send({status:false,message:"Đăng nhập thất bại"})
            }
        }
    } catch (error) {
        return res.status(503).json({status:false,message:'Lỗi'})
    }
}
import express from 'express'
import mongoose from 'mongoose'
import ProductRouter from './router/product.js'
import AuthRouter from './router/auth.js'
const app = express()
const connectDB = async()=>{
    try {
        mongoose.connect(`mongodb://localhost:27017/productshop`)
        console.log(`Kết nối thành công`);
        
    } catch (error) {
        console.log(`Kết nối ko thành công`);
    }

}
app.use(express.json())
app.use('/api',ProductRouter)
app.use('/auth',AuthRouter)
app.listen(4000,()=>{
    connectDB()
    console.log(`Endpoint http://localhost:4000`)
})


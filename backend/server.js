const express=require( 'express')
const mongoose=require('mongoose')
const app=express()


const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/')
        console.log('mongodb connected successfully')
    }
    catch(error){
    console.log(error);
    }
}
connectDB()
app.get('/',(req,res)=>{
    res.send('Hi from express js')
})

app.listen(4000,()=>{
    console.log('Server running on port 4000');
})
const express =require ("express")
const app=express()

const connectDB=require('./config/connectDB')
const contactRouter=rquire('./routes/contact')

app.use(express.json())
connectDB() //i call the function that connect to the DB
app.use("/api/contacts",contactRouter)



const port=5000
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
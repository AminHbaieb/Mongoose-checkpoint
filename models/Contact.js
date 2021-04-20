const mongoose= require('mongoose')
const schema=mongoose.Schema
//i can create it like so: contactSchema = new mongoose.Schema()
const contactSchema = new schema({

    
name: {type:String,required:true},
age: Number,
email: {type:String,required:true,unique:true},
phone:Number,
favoriteFoods: {type:[String]}


})
module.exports=mongoose.model("Contact",contactSchema)
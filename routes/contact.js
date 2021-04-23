const express =require('express')
const router=express.router()
const Contact=require('..models/Contact')
 
//here we test the route
router.get('/test',(req,res)=>{ //  /api/contacts/test in the browser or in the postman
    res.send('the route is working')
})

// arrayOfPeople 
let arrayOfPeople =[{
        name: 'Akram',
        age: 15,
        email: 'akram@gmail.com',
        favoriteFoods: ['rouz', 'kouskous', 'lablabi']
    }, {
        name: 'Amin',
        age: 24,
        email: 'amin@gmail.com',
        favoriteFoods: ['sushi', 'creppe', 'pizza']
    }, {
        name: 'Rim',
        age: 15,
        email: 'rim@gmail.com',
        favoriteFoods: ['loubia', 'lazania', 'salade']
    }];

//Create a collection on the DB with model.create():
model.create(arrayOfPeople,(err, data) => {
    try {
        console.log("collection is created :", data)
    } catch (error) {
        res.status(500).send({msg:"collection coudn't be created ",error})
    }
})




//Find all persons  :
router.get('/',async(req,res)=>{
    try {
        const contacts=await Contact.find()
        res.status(200).send({msg:"contact is find",contacts})
    } catch (error) {
        res.status(500).send("impossible to find contact")
    }
})
     //Find person by food :
     router.get('/:salade',async(req,res)=>{
    try {
        const {salade}=req.params
        const contact=await Contact.findOne({_id:salade})
        res.status(200).send({msg:"contact is find",contact})
    } catch (error) {
        res.status(500).send("impossible to find contact")
    }
})

//Find person by name :
     router.get('/:Id',async(req,res)=>{
    try {
        const {Id}=req.params
        const contact=await Contact.findOne({_id:Id})
        res.status(200).send({msg:"contact is find",contact})
    } catch (error) {
        res.status(500).send("impossible to find contact")
    }
})
    
//Find person by _id then edit :
    router.put('/:amin',async(req,res)=>{
    try {
        const{amin}=req.params
        const contact=await Contact.findOneAndUpdate({_id:amin},{$set:{...req.body}})
        res.status(200).send({msg:"contact is find and updated",contact})
    } catch (error) {
        res.status(500).send("impossible to find contact")
    }
})

//Find person by _id then edit :
    router.put('/:Id',async(req,res)=>{
    try {
        const{Id}=req.params
        const contact=await Contact.findOneAndUpdate({_id:Id},{$set:{...req.body}})
        res.status(200).send({msg:"contact is find",contact})
    } catch (error) {
        res.status(500).send("impossible to find contact")
    }
})
    //Find person and then remove it :
    router.delete('/:amin',async(req,res)=>{
    try {
        const{amin}=req.params
        const contact=await Contact.findByIdAndDelete({_id:amin},{$set:{...req.body}})
        res.status(200).send({msg:"contact is deleted",contact})
    } catch (error) {
        res.status(500).send("impossible to delete contact")
    }
})
    //Find person by _id and remove it :
    router.delete('/:Id',async(req,res)=>{
    try {
        const{Id}=req.params
        const contact=await Contact.findByIdAndDelete(Id)
        res.status(200).send({msg:"contact is deleted",contact})
    } catch (error) {
        res.status(500).send("impossible to delete contact")
    }
})


module.exports=router //must be called too, in the server
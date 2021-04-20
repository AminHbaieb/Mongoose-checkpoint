const express =require('express')
const router=express.router()
const Contact=require('..models/Contact')
 
//here we test 
router.get('/test',(req,res)=>{ //  /api/contacts/test in the browser
    res.send('the route is working')
})

router.post('/',async(req,res)=>{
    try {
        const {name,age,email,number,favoriteFood}=req.body
        if(!name||!email){
            return res.status(400).send("name and email are required")
        }
        const contactUniq=await Contact.findOne({email})
        if (contactUniq){
            return res.status(400).send("Contact already exist")
        }
        const contact=new Contact=new Contact({
            name,age,email,number,favoriteFood
        })
        await contact.save()
    } catch (error) {
        res.status(500).send("impossible to add contact")
    }
})
//Find person by name :
router.post('/',async(req,res)=>{
    try {
        const contacts=await Contact.find()
        res.status(200).send({msg:"contact is find",contacts})
    } catch (error) {
        res.status(500).send("impossible to find contact")
    }
})
     //Find person by name :
     router.post('/:amin',async(req,res)=>{
    try {
        const {amin}=req.params
        const contact=await Contact.findOne({_id:amin})
        res.status(200).send({msg:"contact is find",contact})
    } catch (error) {
        res.status(500).send("impossible to find contact")
    }
})
    //Find person by _id then edit :
    router.post('/:Id',async(req,res)=>{
    try {
        const{Id}=req.params
        const contact=await Contact.findOneAndUpdate({_id:Id},{$set:{...req.body}})
        res.status(200).send({msg:"contact is find",contact})
    } catch (error) {
        res.status(500).send("impossible to find contact")
    }
})
    //Find person and then update :
    router.post('/:amin',async(req,res)=>{
    try {
        const{amin}=req.params
        const contact=await Contact.findByIdAndDelete({_id:amin},{$set:{...req.body}})
        res.status(200).send({msg:"contact is deleted",contact})
    } catch (error) {
        res.status(500).send("impossible to delete contact")
    }
})
    //Find person by _id and remove it :
    router.post('/:Id',async(req,res)=>{
    try {
        const{Id}=req.params
        const contact=await Contact.findByIdAndDelete(Id)
        res.status(200).send({msg:"contact is deleted",contact})
    } catch (error) {
        res.status(500).send("impossible to delete contact")
    }
})


module.exports=router //must be called too, in the server
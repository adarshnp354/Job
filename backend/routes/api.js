
const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adarsh:adarshnp@cluster1.gzeps.mongodb.net/libraryDb?retryWrites=true&w=majority')

router.post('/admin/add',(req,res)=>{
    new admin(req.body).save((err,jobD)=>{
        if(err){
            console.log(err)
        }else{
            res.send(jobD)
        }
    })      
})


router.post('/admin/delete/:id',(req,res)=>{
    const id = req.params.id
    Bookdata.findByIdAndDelete(id,(err,docs)=>{
        if(err){
            console.log(err)
        }else{
            console.log("deleted",docs)
        }
    })
    res.redirect('/books')
})

router.get('/admin/edit/:id',(req,res)=>{
    const id = req.params.id
    Bookdata.findOne({_id:id})
        .then((book)=>{
            res.render("edit",{nav,book})
        })

        
})

router.post('/admin/update/:id',(req,res)=>{
    const id = req.params.id
    var items = {
                title:req.body.title,
                author:req.body.author,
                type:req.body.type,
                img:req.body.img
            }
           Bookdata.findByIdAndUpdate(id,items,(err,doc)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log("updated",doc)
                }
           })
            res.redirect('/books')          
})

router.get('/admin/view',(req,res)=>{
    admin.find()
    .then((data)=>{
        res.send(data);
    })
})






module.exports = router;


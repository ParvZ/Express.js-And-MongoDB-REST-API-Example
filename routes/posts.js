const express = require("express");
const router = express.Router();
const Post = require('../models/post')

router.get('/' , (req,res)=>{
    res.send('From post router')    
})

router.post('/', async (req,res) =>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedDatatoDb = await post.save();
        res.json(savedDatatoDb)
    } catch (error) {
        res.json({message: error})
    }
   
})

module.exports = router;

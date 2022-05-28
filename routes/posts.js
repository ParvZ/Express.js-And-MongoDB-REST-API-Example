const express = require("express");
const router = express.Router();
const Post = require('../models/post')

router.get('/' , (req,res)=>{
    res.send('From post router')    
})

router.post('/', (req,res) =>{
    console.log(req.body);
    res.send(req.body)
})

module.exports = router;

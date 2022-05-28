const express = require("express");
const router = express.Router();
const Post = require('../models/post')


//getting all post available
router.get('/' , async (req,res)=>{
    try {
        const postList = await Post.find();
        res.json(postList)
    } catch (error) {
        res.json({message: error})
    }
})

// submit new post to db
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

// find specific post details
router.get('/:id' , async (req,res)=>{
    try {
        const singlePost = await Post.findById(req.params.id);
        res.json(singlePost)
    } catch (error) {
        res.json({message: error})
    }
})

// delete specific post
router.delete('/:id' , async (req,res)=>{
    try {
        const singlePost = await Post.deleteOne({_id: req.params.id})
        res.send('Post deleted')
    } catch (error) {
        res.json({message: error})
    }
})

//updating single post
router.patch('/:id', async (req,res)=>{
    try {
        const modifiedPost = await Post.updateOne({_id: req.params.id}, {
            $set: {
                title: req.body.title,
                description: req.body.description
            }
        })
        res.json(modifiedPost)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router;

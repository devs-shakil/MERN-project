const express = require('express');
const blogSchema = require('./src/model/blogModel.js');
const router = express.Router();

//Fetch all blog post
router.get('/posts', async ()=>{
    try {
        const posts = await blogSchema.fine();
        res.json(posts);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Fetch a single blog post by id
router.get('/posts/:id', getpost, (req, res) =>{
    res.json(res.post)
})

// create a new blog post
router.post('/post', () =>{
    const post = new blogSchema({
        title: req.body.title,
        content:req.body.content,
        author:req.body.author
    });
    
})

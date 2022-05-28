const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

const postRouter = require('./routes/posts');

app.use('/posts', postRouter);

app.get('/', (req,res)=>{
    res.send('we at home')
})
 
mongoose.connect(process.env.DB_CONNECT, ()=>{
    console.log('connected')
})

app.listen(3000);
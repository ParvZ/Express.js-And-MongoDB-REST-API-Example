const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


const postRouter = require('./routes/posts');

app.use('/posts', postRouter);

app.get('/', (req,res)=>{
    res.send('we at home')
})
 
mongoose.connect(process.env.DB_CONNECT, ()=>{
    console.log('connected')
})

app.listen(3000);
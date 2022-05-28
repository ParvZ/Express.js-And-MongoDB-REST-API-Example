const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config')

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
//route middleware
const postRouter = require('./routes/posts');

app.use('/posts', postRouter);

app.get('/', (req,res)=>{
    res.send('Hello fellas, this is your buddys home.')
})
 
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true }, ()=>{
    console.log('connected')
})

app.listen(3000);
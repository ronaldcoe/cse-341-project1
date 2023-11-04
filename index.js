const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const  contactRouter = require('./routes/contact');
const app = express();

app.use(bodyParser.json());

app.use((req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

mongodb.initDb(err=> {
    if(err){
        console.log(err);
    }else{
        app.use('/contact', contactRouter);
        app.listen(3000);
        console.log('Listening on port 3000')
    }
})
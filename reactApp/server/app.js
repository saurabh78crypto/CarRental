const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');


//Middleware
const middleware = (req, res, next) =>{
    console.log('Hello my Middleware');
    //next()
    next();
    
}

// middleware();


app.get('/', (req, res) => {
     res.send('Hello World from the server');
});

app.get('/about', middleware, (req, res) => {
    res.send('Hello About World from the server');
});

app.get('/contact', (req, res) => {
    res.send('Hello Contact World from the server');
});

app.get('/signin', (req, res) => {
    res.send('Hello SignIn World from the server');
});

app.get('/signup', (req, res) => {
    res.send('Hello SignUp World from the server');
});

app.listen(3000, () =>{
    console.log('server is runnning at port no 3000');
})
const express = require('express');
const app = express();
const dotenv = require('dotenv');

require('./db/conn');


dotenv.config({path:'./config.env'});

app.use(express.json());

// const User = require('./model/userSchema');

//link the router file to make route easy
app.use(require('./router/auth'));

//Middleware
const middleware = (req, res, next) =>{
    console.log('Hello my Middleware');
    //next()
    next();
    
}

// middleware();


app.get('/', (req, res) => {
     res.send('Hello World from the server app.js');
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

app.listen(5000, () =>{
    console.log('server is runnning at port no 5000');
})
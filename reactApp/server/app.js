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


app.get('/signin', (req, res) => {
    res.send('Hello SignIn World from the server');
});

app.get('/signup', (req, res) => {
    res.send('Hello RegUser World from the server');
});

app.get('/signupvec', (req, res) => {
    res.send('Hello RegVehicle World from the server');
});

app.listen(5000, () =>{
    console.log('server is runnning at port no 5000');
})
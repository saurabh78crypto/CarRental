const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send('Hello World from the server router.js');
});

//registering the new user
router.post('/register', async (req, res) => {
    
    const { name, email, phone, password, cpassword} = req.body;

    if(!name || !email || !phone || !password || !cpassword){
        return res.status(422).json({error:"Field is empty!"});
    }

    try{
        const userExist = await User.findOne({email:email}); 

        if(userExist){

            return res.status(422).json({error:"Email already registered!"});

        }else if(password != cpassword){

            return res.status(422).json({error:"Password are not same!"});

        }else{

            const user = new User({name, email, phone, password, cpassword});

            await user.save();
            
            res.status(201).json({message:'User registered successfully!'});
    
        }

       
 
    }catch (err) {
        console.log(err);
    }
   
});


//user login
router.post('/signin', async (req, res) => {
    try{
        let token;

        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error:'Fields are empty!'});
        }

        const userLogin = await User.findOne({email:email});

        // console.log(userLogin);

        if(userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("loginToken", token, {
                expires:new Date(Date.now() + 25892000000),//30 days
                httpOnly:true
            });
        
            if(!isMatch){
                res.status(400).json({error:'Invalid Credentials!'});
            }else{
                res.json({message:'User signin successfully'});
            }
            
        }else {
            res.status(400).json({error:'Invalid Credentials!'});
        }
        
       
        

    }catch (err) {
        console.log(err);
    }
});


module.exports = router;
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


require('../db/conn');
const User = require('../model/userSchema');

const vehicleUser = require('../model/vehicleSchema');


//user login
router.post('/login', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Fields are empty!' });
        }
        const userLogin = await User.findOne({ email: email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            token = await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("loginToken", token, {
                expires: new Date(Date.now() + 25892000000),//30 days
                httpOnly: true
            });
            if (!isMatch) {
                res.status(400).json({ error: 'Invalid Credentials!' });
            } else {
                res.json({ message: 'User signin successfully' });
            }
        } else {
            res.status(400).json({ error: 'Invalid Credentials!' });
        }
    } catch (err) {
        console.log(err);
    }
});


//registering the new user
router.post('/reguser', async (req, res) => {    
    try {
        const { name, email, phone, password, cpassword } = req.body;
        console.log("data -------------------->", req.body);

        const userExist = await User.findOne({ email: email });
        if (!userExist) throw new Error("User Already Registered!")

        // const data = {
        //     name: name,
        //     email: email,
        //     phone: phone,
        //     password: password,
        //     cpassword: cpassword
        // }
        // const saveUser = await data.save().promise()
        // console.log("DB -------------------------->", saveUser);

        // if (userExist) {
        //     return res.status(422).json({ error: "Email already registered!" });
        // } else if (password != cpassword) {
        //     return res.status(422).json({ error: "Password are not same!" });
        // } else {
        //     const user = new User({ name, email, phone, password, cpassword });
        //     await user.save();
        //     res.status(201).json({ message: 'User registered successfully!' });
        // }
        return res.status(200).json({
            statuscode: 200,
            message : "Data Added Successfully"
        })
    } catch (err) {
        return res.status(400).json({
            statuscode: 400,
            error: err.message
        })
    }
});

//Vechile Registration
router.post('/regVehicle', async (req, res) => {
    const { email, phone, vehicleNumber, password, cpassword } = req.body;
    if (!email || !phone || !vehicleNumber || !password || !cpassword) {
        return res.status(422).json({ error: 'Field is empty!' });
    }
    try {
        const vecUserExist = await vehicleUser.findOne({ email: email });
        if (vecUserExist) {
            return res.status(422).json({ error: "Vehicle already registered!" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password are not same!" });
        } else {
            const vechUser = new vehicleUser({ email, phone, vehicleNumber, password, cpassword });
            await vechUser.save();
            res.status(201).json({ message: 'Vehicle registered successfully!' });
        }
    } catch (err) {
        console.log(err);
    }
})




module.exports = router;
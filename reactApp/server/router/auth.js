const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


require('../db/conn');
const User = require('../model/userSchema');

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


module.exports = router;
import User from "../model/userSchema";
const bcrypt = require('bcrypt')


const regUser = async (req, res) => {
    try {
        const { name, email, phone, password, cpassword } = req.body.values;

        // Check if User exist or not
        const userExist = await User.findOne({ email: email });
        console.log(userExist)
        if (userExist != null) {
            res.json({
                message: "User Already Registered"
            })
        }

        // Password Hashing
        let hashedPassword = await bcrypt.hash(password, 10);
        let hashedCPassword = await bcrypt.hash(cpassword, 10);
        

        // Object for saving in DB
        const data = new User({
            name: name,
            email: email,
            phone: phone,
            // password: password,
            password: hashedPassword,
            // cpassword: cpassword
            cpassword: hashedCPassword
        })

        // Save method for saving in DB
        const saveUser = await data.save()
        console.log("DB -------------------------->", saveUser);

        return res.json({
            statuscode: 200,
            message: "Data Added Successfully"
        })
    } catch (err) {
        return res.json({
            statuscode: 200,
            error: err.message
        })
    }
}

export { regUser }
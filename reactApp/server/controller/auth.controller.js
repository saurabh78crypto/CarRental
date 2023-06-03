import Driver from "../model/driverSchema";
import User from "../model/userSchema";
import Car from "../model/vehicleSchema";
const bcrypt = require('bcrypt')

//User Registration
const regUser = async (req, res) => {
    try {
        const { name, email, phone, password, cpassword } = req.body.values;
        // Check if User exist or not
        const userExist = await User.findOne({ email: email });
        console.log(userExist)
        if (userExist != null) {
            res.status(422).json({
                message: "User Already Registered"
            })
        }
        // Password Hashing
        let hashedPassword = await bcrypt.hash(password, 10);
        let hashedCPassword = await bcrypt.hash(cpassword, 10);
        // Object for saving in DB
        const data = new Driver({
            name: name,
            email: email,
            phone: phone,
            cars:cars,
            password: hashedPassword,
            cpassword: hashedCPassword
        })
        // Save method for saving in DB
        const saveUser = await data.save()
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


//Add Car
const regVehicle = async (req, res) => {
    try{
        const {vehicleNumber, model} = req.body.values
        // Check if User exist or not
        const carExist = await Car.findOne({ vehicleNumber: vehicleNumber });
        console.log(carExist)
        if (carExist != null) {
            res.json({
                message: "Car Already Registered"
            })
        }
         // Object for saving in DB
         const carData = new Car({
            vehicleNumber: vehicleNumber,
            model: model
        })
         // Save method for saving in DB
         const saveCar = await carData.save()
         return res.json({
             statuscode: 200,
             message: "Data Added Successfully"
         })
    }catch(err){
        return res.json({
            statuscode: 200,
            error: err.message
        })
    }
}

//Driver Registration
const addDriver = async (req, res) => {
    try {
        const { name, email, cars, phone, password, cpassword } = req.body.values;
        // Check if User exist or not
        const userExist = await User.findOne({ email: email });
        console.log(userExist)
        if (userExist != null) {
            res.status(422).json({
                message: "Driver Already Registered"
            })
        }
        // Password Hashing
        let hashedPassword = await bcrypt.hash(password, 10);
        let hashedCPassword = await bcrypt.hash(cpassword, 10);
        // Object for saving in DB
        const data = new Driver({
            name: name,
            email: email,
            phone: phone,
            cars: cars,
            password: hashedPassword,
            cpassword: hashedCPassword
        })
        // Save method for saving in DB
        const saveUser = await data.save()
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





export { regUser, regVehicle, addDriver}
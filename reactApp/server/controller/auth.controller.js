import Driver from "../model/driverSchema";
import User from "../model/userSchema";
import Car from "../model/vehicleSchema";
import Location from "../model/locationSchema";
const bcrypt = require('bcrypt')

//Login User
const signin = async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        const userLogin = await User.findOne({ email: email });
        if (userLogin) {
            await bcrypt.compare(password, userLogin.password);
            token = await userLogin.generateAuthToken();
            res.cookie("loginToken", token, {
                expires: new Date(Date.now() + 25892000000),//30 days
                httpOnly: true
            });
        }    
    } catch (err) {
        console.log(err);
    }
}

//Login Driver
const loginDriver = async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        const driverLogin = await Driver.findOne({ email: email });
        if (driverLogin) {
            await bcrypt.compare(password, driverLogin.password);
            token = await driverLogin.generateAuthToken();
            res.cookie("loginToken", token, {
                expires: new Date(Date.now() + 25892000000),//30 days
                httpOnly: true
            });
        }    
    } catch (err) {
        console.log(err);
    }
}

//User Registration
const regUser = async (req, res) => {
    try {
        const { name, email, phone, password, cpassword } = req.body.values;
        // Check if User exist or not
        const userExist = await User.findOne({ email: email });
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
        const {vehicleNumber, model,status} = req.body.values
        const carExist = await Car.findOne({ vehicleNumber: vehicleNumber });
        if (carExist != null) {
            res.json({
                message: "Car Already Registered"
            })
        }
         const carData = new Car({
            vehicleNumber: vehicleNumber,
            model: model,
            status: status
        })
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
        const { name, email, selectVehicle, phone, password, cpassword } = req.body.values;
        const userExist = await User.findOne({ email: email });
        if (userExist != null) {
            res.status(422).json({
                message: "Driver Already Registered"
            })
        }
        let hashedPassword = await bcrypt.hash(password, 10);
        let hashedCPassword = await bcrypt.hash(cpassword, 10);
        const data = new Driver({
            name: name,
            email: email,
            phone: phone,
            selectVehicle: selectVehicle,
            password: hashedPassword,
            cpassword: hashedCPassword
        })
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

//Retrieve Vehicle List
const getvehicleList = async (req,res) => {
    try {
        const vehicleList = await Car.find({  });
        return res.json({
            statuscode: 200,
            message: 'Vehicle fetch successfully',
            vehicleList: Array.isArray(vehicleList) ? vehicleList: []
        })
    } catch (err) {
        return({
            statuscode: 400,
            error: err.message
        })
    }
}

// To get vehicleDetais 
const getVehicleDetails = async (req, res) => {
    try {
        const vehicleNumber = req.params.values;
        const cars = await Car.findOne({ vehicleNumber });
        if (!cars) {
          return res.status(404).json({
            statuscode: 404,
            error: 'Vehicle not found',
          });
        }
        return res.json({
          statuscode: 200,
          message: 'Data fetched successfully',
          cars,
        });
      } catch (error) {
        return res.status(500).json({
          statuscode: 500,
          error: error.message,
        });
      }
}

// Create new location 
const newLocation = async (req, res) => {
    try {
        const {name} = req.body.values;
        const data = new Location({ name: name });
        const saveLocation = await data.save();
        return res.json({
            statuscode: 200,
            message: 'Data Added Successfully!',
            data
        });
    } catch (error) {
        return res.status(500).json({
            statuscode: 500,
            error: error.message
        });
    }
}

// Access Location
const getLocation = async (req,res) => {
    try {
        const locationList = await Location.find({  });
        return res.json({
            statuscode: 200,
            message: 'Location fetch successfully!',
            locationList: Array.isArray(locationList) ? locationList: []
        })
    } catch (err) {
        return res.json({
            statuscode: 400,
            error: err.message
        })
    }
}


export { regUser, regVehicle, addDriver, signin, loginDriver, getvehicleList, getVehicleDetails, newLocation, getLocation}
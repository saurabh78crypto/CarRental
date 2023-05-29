const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    vehicleNumber:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cpassword:{
        type: String,
        required: true
    }
});

const vehicleUser = mongoose.model('VEHICLEUSER',vehicleSchema);

module.exports = vehicleUser;
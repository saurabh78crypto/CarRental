const mongoose = require('mongoose');

const rideSchema = mongoose.Schema({
    selectFromLocation:{
        type: 'String',
        required: true
    },
    selectToLocation:{
        type: 'String',
        required: true
    },
    selectVehicle:{
        type: 'String',
        required: true
    }
})

const Ride = mongoose.model('RIDE',rideSchema);
module.exports = Ride;
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');

const vehicleSchema = new mongoose.Schema({
    vehicleNumber:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    // owner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    tokens: [
        {
            token:{
                type: String,
                required: true
            }
        }
    ],
});



//Generating Tokens
vehicleSchema.methods.generateAuthToken = async function () {
    try{
        let tokenVec = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token:tokenVec });
        await this.save();
        return tokenVec;
    }catch(err){
        console.log(err);
    }
}

const Car = mongoose.model('CAR',vehicleSchema);

module.exports = Car;
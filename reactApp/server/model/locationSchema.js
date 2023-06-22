const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const locationSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    tokens: [
        {
            token:{
                type: String,
                required: true
            }
        }
    ],
})

//Generating Tokens
locationSchema.methods.generateAuthToken = async function () {
    try{
        let tokenLoc = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token:tokenLoc });
        await this.save();
        return tokenLoc;
    }catch(err){
        console.log(err);
    }
}


const Location = mongoose.model('LOCATION',locationSchema);

module.exports = Location;
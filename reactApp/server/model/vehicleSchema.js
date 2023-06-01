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
    },
    tokens: [
        {
            token:{
                type: String,
                required: true
            }
        }
    ],
});

//Password hashing
vehicleSchema.pre('save', async function(next) {
    console.log('I am in the pre method');
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10);
        this.cpassword = await bcrypt.hash(this.cpassword, 10);
    }
    next();
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

const vehicleUser = mongoose.model('VEHICLEUSER',vehicleSchema);

module.exports = vehicleUser;
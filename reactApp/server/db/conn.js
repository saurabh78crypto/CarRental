const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://saurabhpingale:Saurabh%4078@cluster0.u4hh8yk.mongodb.net/CarRental?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connection Successful');
    }).catch((err) => console.log('Connection Unsuccessful'));

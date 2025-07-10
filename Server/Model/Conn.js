require('dotenv').config();
const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGODB_URI)

mongoose.connect("mongodb+srv://babariyanency06:2qxt6iiN0UBBTHBu@employee.wl0eymp.mongodb.net/employee?retryWrites=true&w=majority&appName=employee")
    .then(() => {
        console.log("Connected Suceessf");
    }).catch((error) => {
        console.log(error);

    })
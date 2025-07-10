const mongoose = require('mongoose')

const userdata = new mongoose.Schema({
    fname:String,
    lname:String,
    city:String,
    email:String,
    password:String
})

const user = mongoose.model('Users',userdata)
module.exports =user
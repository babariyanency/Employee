const express = require('express')
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json())

require('./Model/Conn')
const user = require('./Model/Datamodel')

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const bcrypt = require('bcrypt');
const saltRounds = 10;

app.post("/userdata", (req, res) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);

    console.log(hash);

    var studentdata = new user({
        fname: req.body.fname,
        lname: req.body.lname,
        city: req.body.city,
        email: req.body.email,
        password: hash
    });

    studentdata.save().then((result) => {
        res.status(201).send(result);
    }).catch((error) => {
        res.send(400).send(error);
    })
})
app.get("/userlist", (req, res) => {
    user.find({}).then((result) => {
        res.json(result);
    }).catch((error) => {
        res.status(500).send(error);
    })
})
app.get("/updatelist/:id", (req, res) => {
    user.findById(req.params.id).then((updatedata) => {
        res.json(updatedata)
    })
})
app.post("/updatelist/:id", (req, res) => {
    user.findByIdAndUpdate(req.params.id, req.body).then((updatedata) => {
        res.redirect('/userlist')
    })
})
app.get("/userdelete/:id", (req, res) => {
    user.findByIdAndDelete(req.params.id).then((updatedata) => {
        res.json(updatedata)
    })
})

app.listen(8000, () => {
    console.log("successfully....");
})
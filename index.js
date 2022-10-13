const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const mongoose = require('mongoose')
const router = express.Router();
const UserSchema = require('./model/user.js')

// Here we connect with BD

app.use(express.urlencoded({extended: true}))
app.use(express.json())

router.get('/user', (req, res) => {
    UserSchema.find(function(err, data){
        if(err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
});

router.post('/user', (req, res) => {
    let newUser = new UserSchema({
        name: req.body.name,
        lastName: req.body.lastName,
        age: req.body.age,
        eMail: req.body.eMail,
        phone: req.body.phone,
        mobile: req.body.mobile,
        password: req.body.password,
        address: req.body.address,
        city: req.body.city
    })



    newUser.save(function(err, data){
        if(err){
            console.log(err)
        }else{
        res.send("saved successfully " + newUser)
        }
    });
})

router.get('/greeting/:name', (req, res) => {
    var name = req.params.name;
    res.send("Hello World " + name);
});



router.get('/bye/:name', (req, res) => {
    var name = req.params.name;
    res.send("Bye World " + name);
});

router.get('/validate_age/:age', (req, res) => {
    var message = '';
    var age = req.params.age;
    if (age >= 18) {
        message = 'you\'re of age';
    } else {
        message = 'you are underage';
    }
    res.send("Your age is: " + age + " " + message);
});




app.use(router)
app.listen(port,() => {
    console.log('Listening on '+port)
})

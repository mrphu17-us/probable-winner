var express = require('express');
var router = express.Router();
var users = require('../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

router.post('/login', async (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;
    var privateKey = fs.readFileSync(path.join(__dirname, 'key', 'private.key'));
    //check valid email/ pass
    var user = await users.findOne({
        'email': email
    }).exec();
    if (user != null) {
        bcrypt.compare(password, user.password).then(function (result) {
            if (result == true) {
                var token = jwt.sign({
                    email: email
                }, privateKey, {
                    algorithm: 'RS256'
                });
                return res.json({
                    token: token
                });
            } else {
                return res.status(400).json({
                    'msg': 'password is incorrect!'
                });
            }
        });
    } else {
        return res.status(400).json({
            'msg': 'email is incorrect!'
        });
    }
});

router.post('/signup', async (req, res, next) => {
    let email = req.body.email;
    let name = req.body.name;
    let password = bcrypt.hashSync(req.body.password, 10);
    // check if dup username
    var findUsers = await users.findOne({
        'email': email
    }).exec();
    if (findUsers != null) {
        return res.status(400).json({
            'msg': 'email is exist!'
        });
    }
    // create new user
    users.create({
        email: email,
        password: password,
        name: name
    });

    var privateKey = fs.readFileSync(path.join(__dirname, 'key', 'private.key'));
    jwt.sign({
        email: email
    }, privateKey, {
        algorithm: 'RS256'
    }, (_, token) => {
        res.json({
            "token": token
        });
    });
});

module.exports = router;
var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

const users = require("../models/user");


router.get('', (req, res) => {
    users.find({}, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
})

router.get('/:id', (req, res) => {
    users.findOne({
        _id: req.params.id
    }, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
})

module.exports = router;
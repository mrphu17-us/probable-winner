var express = require('express');
var router = express.Router();
const boards = require("../models/board");

router.post('', (req, res) => {
    let created_by = req.user.email;

    boards.create({
        ...req.body,
        // created_by: created_by
    }, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
})

router.get('', (req, res) => {
    boards.find({
        // created_by: req.user.email
    }, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
})

router.get('/:id', (req, res) => {
    boards.findOne({
        _id: req.params.id
    }, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
})

router.delete('/:id', (req, res) => {
    boards.deleteOne({
        _id: req.params.id,
        // created_by: res.user.email
    }, function (err) {
        if (err) {
            res.json(err);
        } else {
            res.json({
                'msg': 'Deleted successfully'
            });
        }
    });
})

module.exports = router;
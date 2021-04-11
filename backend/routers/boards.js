var express = require('express');
var router = express.Router();
const boards = require("../models/board");

router.post('', (req, res) => {
    boards.create(req.body, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
})

router.get('', (req, res) => {
    boards.find({}, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
})

router.delete('/:id', (req, res) => {
    boards.deleteOne({
        _id: req.params.id
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
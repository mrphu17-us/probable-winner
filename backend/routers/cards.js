var express = require('express');
var router = express.Router();

const cards = require("../models/card");

router.post('', (req, res) => {
    cards.create(req.body, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
})

router.get('', (req, res) => {
    cards.find({}, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
})

router.delete('/:id', (req, res) => {
    cards.deleteOne({
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
var express = require('express');
var router = express.Router();

const cards = require("../models/card");

router.post('', (req, res) => {
    cards.create({
        ...req.body,
        created_by: req.user.email
    }, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
})

router.get('/b/:board_id', (req, res) => {
    cards.find({
        'board_id': req.params.board_id,
        // 'created_by': req.user.email,
        'status': req.query.status
    }, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
})

router.get('/:id', (req, res) => {
    cards.findOne({
        _id: req.params.id,
        'created_by': req.user.email
    }, function (err, result) {
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
var express = require('express');
var router = express.Router();

//get all cards by user id here
router.get('', (req, res) => {
    req.db.find({}).toArray((err, data) => res.json(data))
})

router.get('/:id', (req, res) => {
    req.db.find({}).toArray((err, data) => res.json(data))
})

module.exports = router;
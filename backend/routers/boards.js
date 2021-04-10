var express = require('express');
var router = express.Router();

router.get('', (req, res) => {
    req.db.find({}).toArray((err, data) => res.json(data))
})

module.exports = router;
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const users = require('../models/user')

router.use('', async (req, res, next) => {
    try {
        var cert = fs.readFileSync(path.join(__dirname, 'key', 'private.key'));
        let data = jwt.verify(
            req.headers.authorization,
            cert, {
                algorithms: ['RS256']
            });
        let user = await users.findOne({
            email: data.email
        }).exec();
        if (user == null) return res.status(401).json({
            'msg': 'token is expired!'
        });
        req.user = {
            'email': user.email,
            'user_avatar': user.user_avatar,
            'name': user.name
        };
        next();
    } catch (err) {
        res.json({
            'msg': 'Wrong token' + err
        })
    }
});
module.exports = router;
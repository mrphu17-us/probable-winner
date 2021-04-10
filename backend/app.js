const express = require('express');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
var cardRouter = require('./routers/cards');
var boardRouter = require('./routers/boards');
var userRouter = require('./routers/users');

let DB_HOST = process.env.DB_HOST;
const client = new MongoClient(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
let db;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

//=================DB Start========================//
app.use((req, res, next) => {
    if (!db) {
        client.connect(function (err) {
            db = client.db('mwa_db');
            req.db = db.collection('users');
            next();
        });
    } else {
        req.db = db.collection('users');
        next();
    }
})
//====================DB End=======================//

app.use('/api/cards', cardRouter);
app.use('/api/boards', boardRouter);
app.use('/api/users', userRouter);


app.get('/', (req, res, next) => {
    res.json({
        'hello': 'world'
    });
})

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

app.listen(3000, () => console.log('listening to 3000'));
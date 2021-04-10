const express = require('express');
const MongoClient = require('mongodb').MongoClient;
var cardRouter = require('./routers/cards');
var boardRouter = require('./routers/boards');
var userRouter = require('./routers/users');

const client = new MongoClient('mongodb://localhost:27017', {
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
            db = client.db('rich');
            req.db = db.collection('schools');
            next();
        });
    } else {
        req.db = db.collection('schools');
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
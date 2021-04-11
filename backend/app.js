const express = require('express');
require('dotenv').config();
var cardRouter = require('./routers/cards');
var boardRouter = require('./routers/boards');
var userRouter = require('./routers/users');
const mongoose = require("mongoose");
let DB_HOST = process.env.DB_HOST;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

//=================DB Start========================//
mongoose.connect(DB_HOST, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
const connection = mongoose.connection;
connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});
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
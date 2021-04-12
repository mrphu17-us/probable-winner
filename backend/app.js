const express = require('express');
require('dotenv').config();
const mongoose = require("mongoose");
const cors = require("cors");

// local deps
var cardRouter = require('./routers/cards');
var boardRouter = require('./routers/boards');
var authRouter = require('./routers/auth');
var userRouter = require('./routers/user');
var middleware = require('./routers/middleware')
let DB_HOST = process.env.DB_HOST;

const app = express();

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use('/api/*', middleware);

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
app.use('/auth', authRouter);
app.use('/users', userRouter);


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
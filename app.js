const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const apiRoutes = require('./routes/api')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use('/static', express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/todos');

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/index.html");
})

// put routes here
app.use(apiRoutes)

app.listen(3000, function () {
    console.log('Express running on http://localhost:3000/.')
});

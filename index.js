const express = require('express');
// var bodyParser = require('body-parser');
var app = express();

app.use('img', express.static(__dirname + '/img'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
})

const { CustomerType, Customer, Nation, EmployeeType } = require('./models/db')
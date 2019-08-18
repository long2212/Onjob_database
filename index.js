const express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use('img', express.static(__dirname + '/img'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})

const { CustomerType, Customer, Nation, EmployeeType } = require('./models/db')

const NationCtr = require('./controllers/nationController');
app.use('/nations',NationCtr);


var server = app.listen(8081, () => {
    var host = server.address().address;
    const port = server.address().port;
    console.log('server is running at http://%s:%s', host, port);
});
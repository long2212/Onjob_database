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

const degreeCtrl = require('./controllers/degrees');
app.use('/degrees', degreeCtrl);


const certificateCtrl = require('./controllers/certificates');
app.use('/certificates', certificateCtrl);

const shiftCtrl = require('./controllers/shifts');
app.use('/shifts', shiftCtrl);

// invalid Url
app.use((req,res) =>{
    res.status(404).send('Not Found!');
});

const { CustomerType, Customer } = require('./models/db');

const server = app.listen(8081,()=>{
    const host = server.address().address;
    const port = server.address().port;
    console.log('Server is running at http://%s:%s',host, port);
});
const express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use('img', express.static(__dirname + '/data'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "*");
    res.header("Access-Control-Allow-Methods","GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const degreeCtrl = require('./controllers/degreeController');
app.use('/degrees', degreeCtrl);

const nationCtrl = require('./controllers/nationController');
app.use('/nations', nationCtrl);

const certificateCtrl = require('./controllers/cerController');
app.use('/certificates', certificateCtrl);

const shiftCtrl = require('./controllers/shiftController');
app.use('/shifts', shiftCtrl);

const proCtrl = require('./controllers/provinceController');
app.use('/provinces', proCtrl);

const rectypeCtrl = require('./controllers/recordtypeController');
app.use('/recordtypes', rectypeCtrl);

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
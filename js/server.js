var press = require('express');
var app = express();

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});

app.get('/',function(req, res){
    res.send('Hello World!');
});

app.get('/json',function(req, res){
    var result = {
        message: 'Hello JSON'
    }
    res.send(result);
});

var server = app.listen(8081, () => {
    var host = server.address().address
    var post = server.address().post
    console.log("Server is listening at http://%s:%s", host, port);    
});

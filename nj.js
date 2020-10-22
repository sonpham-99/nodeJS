var express = require("express");
var app = express();
var nunjucks = require('nunjucks')

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

var server = require("http").createServer(app);
server.listen(222);

app.get("/", function(req, res){
   res.sendFile(path.join(__dirname+'/views/firsttry.html'));
    console.log('Server running at port: ' + server.address().port)
    });
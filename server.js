var express = require("express");
var app = express();

var path = require('path');

var server = require("http").createServer(app);
server.listen(1234);

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/.html'));
  });
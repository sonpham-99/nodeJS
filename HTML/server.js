var express = require("express");
var app = express();

var path = require('path');

var server = require("http").createServer(app);
server.listen(1234);

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/homepage.html'));
  });

app.get('/homepage.html', function(req,res){
    res.sendFile(path.join(__dirname+'/homepage.html'));
  });

app.get('/body.html', function(req,res){
    res.sendFile(path.join(__dirname+'/body.html'));
  });

app.get('/eyes.html', function(req,res){
    res.sendFile(path.join(__dirname+'/eyes.html'));
  });

app.get('/face.html', function(req,res){
    res.sendFile(path.join(__dirname+'/face.html'));
  });

app.get('/lips.html', function(req,res){
    res.sendFile(path.join(__dirname+'/lips.html'));
  });

app.use(express.static('public'));
//app.use(express.static(__dirname + 'public'));
console.debug('Server listening on port  ' + server.address().port)
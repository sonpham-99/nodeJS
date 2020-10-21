var express = require("express");
var app = express();

var server = require("http").createServer(app);
server.listen(9999);

app.get("/", function(req, res){
   res.send("<font color = red>Dùng Express thành công</font>");
//    console.log('Server đang chạy trong: ' + server.address().port) lấy địa chỉ server
});
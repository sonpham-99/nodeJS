var express = require( 'express' ) ;
var nunjucks = require( 'nunjucks' ) ;
var app = express() ;

var path = require('path');

var PATH_TO_TEMPLATES = '.' ;
nunjucks.configure( PATH_TO_TEMPLATES, {
    autoescape: true,
    express: app
} ) ;

//app.get( '/home.html', function( req, res ) {
//    return res.render( 'index.html' ) ;
//} ) ;

app.get( '/', function( req, res ) {
    var data = {
        firstName: 'Dipper',
        lastName: 'Pine'
    } ; //Tạo dữ liệu
    return res.render( 'index.html', data ) ;
} ) ;
app.listen( 3000 ) ;
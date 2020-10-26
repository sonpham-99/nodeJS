var express = require ('express');
var nunjucks  = require('nunjucks');

var app = express();
app.use(express.static('/public'));

nunjucks.configure(['views/'], { // set folders with templates
    autoescape: true, 
    express: app
});
app.get( '/', function( req, res ) {
    return res.render('homepage.html');
    } ) ;

app.get( '/homepage.html', function( req, res ) {
    return res.render( 'homepage.html') ;
    } ) ;

app.get( '/register.html', function( req, res ) {
    return res.render( 'register.html') ;
    } ) ;

app.get( '/body.html', function( req, res ) {
    return res.render( req.params.html) ;
    } ) ;

app.get( '/eyes.html', function( req, res ) {
    return res.render( 'eyes.html') ;
    } ) ;

app.get( '/face.html', function( req, res ) {
    return res.render( 'face.html') ;
    } ) ;

app.get( '/lip.html', function( req, res ) {
    return res.render( 'lip.html') ;
    } ) ;

app.get( '/body.html', function( req, res ) {
    return res.render( 'body.html') ;
    } ) ;

app.get( '/register.html', function( req, res ) {
    return res.render( 'register.html') ;
    } ) ;


var server = require("http").createServer(app);
server.listen(1111);

app.use(express.static('public'));
console.debug('Server listening on port  ' + server.address().port)
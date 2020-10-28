var express = require ('express');
var nunjucks  = require('nunjucks');
var bodyParser = require('body-parser');
const { error } = require('console');
const MongoClient = require('mongodb').MongoClient

var app = express();
app.use(express.static('/public'));
var connectString = 'mongodb+srv://uyennguyen:tuonguyen1@cluster0.2zbh5.mongodb.net/<Users-db>?retryWrites=true&w=majority'
app.use(bodyParser.urlencoded({ extended: true}))

nunjucks.configure(['views/'], { // set folders with templates
    autoescape: true, 
    express: app
});

MongoClient.connect(connectString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('Users-db')
    const quotesCollection = db.collection('quotes')

    app.post('/quotes', (req, res) => {
        quotesCollection.insertOne(req.body)
        .then((req,res) => {
            res.redirect('/homepage.html')
        })
        .catch(error => console.error(error))
    })
  })

// app.get( '/', function( req, res ) {
//     return res.render('homepage.html');
//     } ) ;

app.get( '/', function( req, res ) {
    return res.render('register.html');
    } ) ;

// app.post('/quotes', (req, res) => {
//     console.log(req.body)
// })

app.get( '/homepage.html', function( req, res ) {
    return res.render( 'homepage.html') ;
    } ) ;

app.get( '/register.html', function( req, res ) {
    return res.render( 'register.html') ;
    } ) ;

app.get( '/body.html', function( req, res ) {
    return res.render( 'body.html') ;
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
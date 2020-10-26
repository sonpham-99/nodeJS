//const mongoose = require("mongoose");
//const express = require("express");
//const app = express();
//const employees = require("./mongo/model");
//const router = express.Router();
//const port = 4000;
//
//var uri = "mongodb://localhost:27017/kennel";
//
//mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
//
//const connection = mongoose.connection;
//
//connection.once("open", function() {
//  console.log("MongoDB database connection established successfully");
//});
//
////app.use("/", router);
//app.get( '/views/homepage.html', function( req, res ) {
//    return res.render( 'homepage.html') ;
//    } ) ;
//app.set('view engine', 'nunjucks');
//
//app.listen(port, function() {
//  console.log("Server is running on Port: " + port);
//});

var mongoose = require('mongoose');
 
// make a connection
mongoose.connect('mongodb://localhost:27017/tutorialkart');
 
// get reference to database
var db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!");
    
    // define Schema
    var BookSchema = mongoose.Schema({
      name: String,
      price: Number,
      quantity: Number
    });
 
    // compile schema to model
    var Book = mongoose.model('Book', BookSchema, 'bookstore');
 
    // a document instance
    var book1 = new Book({ name: 'Introduction to Mongoose', price: 10, quantity: 25 });
 
    // save model to database
    book1.save(function (err, book) {
      if (err) return console.error(err);
      console.log(book.name + " saved to bookstore collection.");
    });
    
});
 
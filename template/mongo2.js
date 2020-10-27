var MongoClient = require('mongodb').MongoClient;
//Create a database named "matou":
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("matou");
    
  //Create a collection name "customers":
//  dbo.createCollection("customers", function(err, res) {
//    if (err) throw err;
//    console.log("Collection created!");
//    db.close();
    
//     //Insert 1 data into collection "customers" 
//    var cus = { name: "Rise", age:"25", address:"Milkway 35" };
//      dbo.collection("customers").insertOne(cus, function(err, res){
//          if (err) throw err;
//          console.log("1 document inserted success");
//          db.close();
//      });
//  });
        //Insert multiple data into collection "customers" 
//    var cus1 = [
//        {name: "Mirtha", age:"20", address:"Pillar 35" },
//        {name: "Zexso", age:"55", address:"Hiles 15" },
//        {name: "Chesto", age:"30", address:"Grass 80" },
//        {name: "Prhta", age:"18", address:"Laser 15" }
//    ];
//    dbo.collection("customers").insertMany(cus1, function (err, res){
//        if (err) throw err;
//        console.log("Number of documents inserted: " + res.insertedCount);
//        db.close();
//    });
    
    //Delete 1 customer
//    var dele = {name : "Rise"};
//    dbo.collection("customers").deleteOne(dele, function(err, obj){
//        if (err) throw err;
//        console.log("Document delete");
//        db.close();
//    });
    
    //Delete all customer with start at 5
//    var dele1 = { age: /^5/ };
//    dbo.collection("customers").deleteMany(dele1, function(err, obj) {
//    if (err) throw err;
//    console.log(obj.result.n + " document(s) deleted");
//    db.close();
//  });
    
    //Drop/ Delete Table/Collections
//    dbo.dropCollection("customers", function(err, delOK) {
//    if (err) throw err;
//    if (delOK) console.log("Collection deleted");
//    db.close();
//  });
    
    //Update the name Rise to Ashley and age to 26
//    var upd = {name:"Rise"};
//    var newd = {$set: {name:"Ashley", age:"26"}};
//    dbo.collection("customers").updateOne(upd, newd, function(err, res){
//        if (err) throw err;
//        console.log("1 Document updated");
//        db.close();
//    })
    
    //Limit to result to 3 document only
//    dbo.collection("customers").find().limit(3).toArray(function(err, result) {
//    if (err) throw err;
//    console.log(result);
//    db.close();
//    });
});
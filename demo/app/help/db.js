const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/demo";

exports.connect = MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

exports.insert = MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db("demo");
    // dbo.createCollection("customers", function (err, res) {
    //     if (err) throw err;
    //     console.log("Collection created!");
    //     db.close();
    // });

    let a = dbo.listCollections().toArray();
    console.log(a);
});

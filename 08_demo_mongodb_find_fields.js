const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) {
    throw err;
  }

  var dbo = db.db("mydb");

  dbo
    .collection("customers")
    .find({}, { projection: { _id: 0, name: 1, address: 1 } })
    .toArray((err, result) => {
      if (err) {
        throw err;
      }

      console.log(result);

      db.close();
    });
});

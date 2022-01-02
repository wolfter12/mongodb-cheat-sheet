const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, db) => {
  if (err) {
    throw err;
  }

  const dbo = db.db("mydb");

  dbo
    .collection("customers")
    .find({})
    .toArray((err, result) => {
      if (err) {
        throw err;
      }

      console.log(result);

      db.close();
    });
});

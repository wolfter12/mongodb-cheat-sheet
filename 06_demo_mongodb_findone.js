const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) {
    throw err;
  }

  const dbo = db.db("mydb");

  dbo.collection("customers").findOne({}, (err, result) => {
    if (err) {
      throw err;
    }

    console.log(result.name);

    db.close();
  });
});

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, db) => {
  if (err) {
    throw err;
  }

  const dbo = db.db("mydb");

  dbo.collection("customers").drop((err, delOk) => {
    if (err) {
      throw err;
    }

    if (delOk) {
      console.log("Collection deleted");
    }

    db.close();
  });
});

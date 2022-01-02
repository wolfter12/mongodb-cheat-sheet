const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, db) => {
  if (err) {
    throw err;
  }

  const dbo = db.db("mydb");

  const mysort = { name: -1 };

  dbo
    .collection("customers")
    .find()
    .sort(mysort)
    .toArray((err, result) => {
      if (err) {
        throw err;
      }

      console.log(result);

      db.close();
    });
});

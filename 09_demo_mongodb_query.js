const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) {
    throw err;
  }

  const dbo = db.db("mydb");

  const query = { address: "Park Lane 38" };

  dbo
    .collection("customers")
    .find(query)
    .toArray((err, result) => {
      if (err) {
        throw err;
      }

      console.log(result);

      db.close();
    });
});

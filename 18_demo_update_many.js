const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, db) => {
  if (err) {
    throw err;
  }

  const dbo = db.db("mydb");

  const myquery = { address: /^S/ };

  const newvalues = { $set: { name: "Minnie" } };

  dbo.collection("customers").updateMany(myquery, newvalues, (err, res) => {
    if (err) {
      throw err;
    }

    console.log(res.modifiedCount + ' document(s) updated');

    db.close();
  });
});

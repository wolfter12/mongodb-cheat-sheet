const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, db) => {
  if (err) {
    throw err;
  }

  const dbo = db.db("mydb");

  const myquery = { address: "Valley 345" };

  const newvalues = { $set: { name: "Mickey", address: "Canyon 123" } };

  dbo.collection("customers").updateOne(myquery, newvalues, (err, res) => {
    if (err) {
      throw err;
    }

    console.log("1 document updated");

    db.close();
  });
});

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) {
    throw err;
  }

  const dbo = db.db("mydb");

  const myquery = { address: "Mountain 21" };

  dbo.collection("customers").deleteOne(myquery, (err, obj) => {
    if (err) {
      throw err;
    }

    console.log("1 document deleted");

    db.close();
  });
});

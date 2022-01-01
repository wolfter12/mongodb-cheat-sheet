const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) {
    throw err;
  }

  const dbo = db.db("mydb");

  const myobj = {
    name: "Company Inc",
    address: "Highway 37",
  };

  dbo.collection("customers").insertOne(myobj, (err, res) => {
    if (err) {
      throw err;
    }

    console.log("1 document inserted");

    db.close();
  });
});

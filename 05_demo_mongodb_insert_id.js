const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, db) => {
  if (err) {
    throw err;
  }

  const dbo = db.db("mydb");

  const myobj = [
    { _id: 154, name: "Chocolate Heaven" },
    { _id: 155, name: "Tasty Lemon" },
    { _id: 156, name: "Vanilla Dream" },
  ];

  dbo.collection("products").insertMany(myobj, (err, res) => {
    if (err) {
      throw err;
    }

    console.log(res);

    db.close();
  });
});

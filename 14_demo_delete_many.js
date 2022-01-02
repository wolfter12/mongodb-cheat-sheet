const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) {
    throw err;
  }

  const dbo = db.db("mydb");

  const myquery = { address: /^O/ };

  dbo.collection("customers").deleteMany(myquery, (err, obj) => {
    if (err) {
      throw err;
    }

    console.log(obj.deletedCount + " document(s) deleted");

    db.close();
  });
});

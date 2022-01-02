const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, db) => {
  if (err) {
    throw err;
  }

  const dbo = db.db("mydb");

  dbo
    .collection("orders")
    .aggregate([
      {
        $lookup: {
          from: "products",
          localField: "product_id",
          foreignField: "_id",
          as: "orderDetails",
        },
      },
    ])
    .toArray((err, result) => {
      if (err) {
        throw err;
      }

      console.log(JSON.stringify(result));

      db.close();
    });
});

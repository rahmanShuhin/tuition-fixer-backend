const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

const uri = process.env.URI;
router.get("/", (req, res) => {
  let client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    const collection = client.db("TUITION").collection("BLOGS");
    if (err) {
      console.log(err);
      client.close();
    } else {
      collection.find().toArray((err, documents) => {
        res.send(documents);
        client.close();
      });
    }
  });
});

router.post("/post", (req, res) => {
  let client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      const data = req.body;
      data.date = new date();
      const collection = client.db("TUITION").collection("BLOGS");
      collection.insertOne(data, (err, documents) => {
        if (err) {
          res.status(404).send(err);
          client.close();
        } else {
          console.log("added");
          res.status(200).send("success");
          client.close();
        }
      });
    }
  });
});

module.exports = router;

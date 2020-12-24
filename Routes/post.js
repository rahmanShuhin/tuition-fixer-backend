const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

const uri = process.env.URI;
router.post("/reg", (req, res) => {
  let client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      const data = req.body;
      const collection = client.db("TUITION").collection("TEACHER");
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

router.post("/contact", (req, res) => {
  let client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      const data = req.body;
      const collection = client.db("TUITION").collection("CONTACT");
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

router.post("/job", (req, res) => {
  let client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const data = req.body;
  console.log(data);
  client.connect((err) => {
    const collection = client.db("TUITION").collection("JOBS");
    collection.insertOne(data, (err, documents) => {
      if (err) {
        res.status(404).send(err);
        client.close();
      } else {
        res.status(200).send("success");
        client.close();
      }
    });
  });
});
router.post("/teacher/contact", (req, res) => {
  let client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const data = req.body;
  console.log(data);
  client.connect((err) => {
    const collection = client.db("TUITION").collection("CONTACT");
    collection.insertOne(data, (err, documents) => {
      if (err) {
        res.status(404).send(err);
        client.close();
      } else {
        res.status(200).send("success");
        client.close();
      }
    });
  });
});
module.exports = router;

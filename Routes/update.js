const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const { ObjectID } = require("mongodb");
require("dotenv").config();

const uri = process.env.URI;

router.patch("/profile/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  let client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      const collection = client.db("TUITION").collection("TEACHER");
      collection
        .updateOne(
          { _id: ObjectID(req.params.id) },
          {
            $set: {
              about: req.body.about,
              mobile: req.body.mobile,
              name: req.body.name,
            },
            $currentDate: { lastModified: true },
          }
        )
        .then(function (result) {
          res.send("success");
          client.close();
        });
    }
  });
});
router.patch("/demo/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  let client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      const collection = client.db("TUITION").collection("TEACHER");
      collection
        .updateOne(
          { _id: ObjectID(req.params.id) },
          {
            $set: {
              demo: req.body.demo,
            },
            $currentDate: { lastModified: true },
          }
        )
        .then(function (result) {
          res.send("success");
          client.close();
        });
    }
  });
});
router.patch("/jobs/interested/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  let client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      const collection = client.db("TUITION").collection("JOBS");
      collection
        .updateOne(
          { _id: ObjectID(req.params.id) },
          {
            $set: {
              interested: req.body.interested,
            },
            $currentDate: { lastModified: true },
          }
        )
        .then(function (result) {
          res.send("success");
          client.close();
        });
    }
  });
});
router.patch("/feedback/:id", (req, res) => {
  let client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      const collection = client.db("TUITION").collection("TEACHER");
      collection
        .updateOne(
          { _id: ObjectID(req.params.id) },
          {
            $set: {
              "tuition.star": req.body.rate,
              "tuition.comments": req.body.comments,
            },
            $currentDate: { lastModified: true },
          }
        )
        .then(function (result) {
          res.send("success");
          client.close();
        });
    }
  });
});
router.patch("/tutor/contact/:id", (req, res) => {
  console.log(req.body);
  let client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      const collection = client.db("TUITION").collection("TEACHER");
      collection
        .updateOne(
          { _id: ObjectID(req.params.id) },
          {
            $set: {
              contacts: req.body,
            },
            $currentDate: { lastModified: true },
          }
        )
        .then(function (result) {
          res.send("success");
          client.close();
        });
    }
  });
});
router.patch("/myProfile/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  let client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      const collection = client.db("TUITION").collection("TEACHER");
      collection
        .updateOne(
          { "personal.email": req.params.id },
          {
            $set: {
              "personal.fullName": req.body.fullName,
              "personal.mobile": req.body.mobile,
              "tuition.video": req.body.video,
              "tuition.available": req.body.available,
              "personal.about": req.body.about,
            },
            $currentDate: { lastModified: true },
          }
        )
        .then(function (result) {
          res.send("success");
          client.close();
        });
    }
  });
});
router.patch("/verify/:id", (req, res) => {
  let client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      const collection = client.db("TUITION").collection("TEACHER");
      collection
        .updateOne(
          { "personal.email": req.params.id },
          {
            $set: {
              "tuition.member": req.body.member,
            },
            $currentDate: { lastModified: true },
          }
        )
        .then(function (result) {
          res.send("success");
          client.close();
        });
    }
  });
});
module.exports = router;

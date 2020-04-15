const db = require("../models");

const passport = require("../config/passport");

var fs = require("fs");

const jwt = require("jsonwebtoken");

module.exports = function (app) {
  // GET ROUTE for PhotoGrid
  app.get("/api/retrieve", (req, res) => {
    db.Photos.findAll({}).then((dbData) => {
      res.json(dbData);
    });
  });
  // CREATE ROUTE FOR DOWNLOADED PICTURE
  app.post("/api/upload", (req, res) => {
    var imageData = fs.readFileSync(
      __dirname + "/static/assets/images/jsa-header.png"
    );
    db.Photos.create({
      image: imageData,
      caption: req.body.caption,
    }).then((dbData) => {
      try {
        fs.writeFileSync(
          __dirname + "/static/assets/tmp/tmp-jsa-header.png",
          dbData.data
        );

        // exit node.js app
        process.exit(0);
      } catch (e) {
        console.log(e);
      }
    });
  });
  //   REGISTER ROUTE
  app.post("/api/register", function (req, res) {
    console.log(req.body);
    db.User.create({
      // name: req.body.name,
      username: req.body.username,
      password: req.body.password,
    })
      .then(function () {
        window.location.href = "/login";

        // res.redirect(307, "/login");
      })
      .catch(function (err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
  });
};

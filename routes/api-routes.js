const db = require("../models");
var fs = require("fs");

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
};

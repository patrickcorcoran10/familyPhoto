const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
// Passport Depends
// const session = require("express-session");
// const passport = require("./config/passport");

require("./routes/api-routes.js")(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require("./models");

// app.use(session({ secret: "corcoran", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, ".client/build/index.html"));
});

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("We are Looking at Pictures on ", PORT);
  });
});

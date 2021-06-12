const express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var path = require("path");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/config/database.json")[env];
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
app.use(logger("dev"));
app.use(cookieParser());
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/CryptoCars",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

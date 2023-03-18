const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

exports.Server = () => {
  const URI = process.env.URL || "mongodb://127.0.0.1:27017/todo";
  //   console.log(URI);
  mongoose.connect(URI).then((e) => {
    console.log("Connected to DB");
  });
};

const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.URL;
const dbConnect = () => {
  mongoose.connect(url);
};
module.exports = dbConnect;

const mongoose = require("mongoose");

const configureDb = async () => {
  try {
    const db = await mongoose.connect("mongodb://127.0.0.1:27017/fitness");
    console.log("connected to db");
  } catch (error) {
    console.log("error connected to db", err);
  }
};

module.exports = configureDb;

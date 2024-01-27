const mongoose = require("mongoose");

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URL);
    console.log("application connected to database !");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectMongo;

// require("dotenv").config();
// const { MongoClient } = require("mongodb");

import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const uri = process.env.MONGOURI;

const connectToDb = async () => {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      console.log("Successfully connected to Mongo Atlas");
    } catch (error) {
      console.error(`Error: ${error}`);
      throw error;
    }
  }

  return mongoose.connection;
};

export default connectToDb;

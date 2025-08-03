const mongoose = require("mongoose");
require("dotenv").config();

// ✅ Use correct env variable name
const dbURL = process.env.ATLASDB_URL;

mongoose.connect(dbURL)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

module.exports = mongoose;


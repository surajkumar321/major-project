const mongoose = require('mongoose');
require('dotenv').config();

const dbURL = process.env.MONGO_URL;

// ✅ Clean connection without deprecated options
mongoose.connect(dbURL)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

module.exports = mongoose;

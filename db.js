// db.js
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.ATLASDB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected successfully!");
})
.catch((err) => {
  console.log("❌ MongoDB connection failed:", err);
});

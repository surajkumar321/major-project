const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KYE,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Wanderlust_DEV",
    allowed_formats: ["png", "jpg", "jpeg"], // ✅ spelling fixed and format correct
  },
});

module.exports = {
  cloudinary,
  storage,
};


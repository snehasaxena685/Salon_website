const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  service: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("inquiries", inquirySchema);
mongoose.connect(process.env.MONGO_URI, { dbName: "salonDB" })

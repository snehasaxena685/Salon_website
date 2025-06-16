// Load environment variables from .env
require("dotenv").config();

// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Create express app
const app = express();

// Middleware
app.use(cors({
  origin: 'https://snehasaxena685.github.io', // ✅ Allow your GitHub Pages frontend
  methods: ['POST'],
}));
app.use(express.json()); // ✅ Parse JSON request bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Import Mongoose model
const Inquiry = require("./models/Inquiry");

// API Route - Receive enquiries from form
app.post("/api/enquiry", async (req, res) => {
  console.log("📩 Form Data Received:", req.body);

  try {
    const { name, phone, email, service, message } = req.body;

    const newInquiry = new Inquiry({
      name,
      phone,
      email,
      service,
      message
    });

    await newInquiry.save();
    res.status(200).json({ message: "✅ Enquiry submitted!" });
  } catch (err) {
    console.error("❌ Error saving enquiry:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

require("dotenv").config(); // Load environment variables

app.use(cors({ origin: 'https://snehasaxena685.github.io' }));



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("DB Error:", err));

// Mongoose Model
const Inquiry = require("./models/Inquiry");

// API Route
app.post("/api/enquiry", async (req, res) => {
  console.log("Form Data Received:", req.body); // ✅ This logs form data in terminal

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
    res.status(200).json({ message: "Enquiry submitted!" });

  } catch (err) {
    console.error("Save Error:", err);
    res.status(500).json({ error: "Error saving enquiry" });
  }
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

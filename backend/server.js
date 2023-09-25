// backend/server.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/contactusdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define the Schema for your contact form data
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// Create a route to handle form submissions
app.post("/api/submitForm", async (req, res) => {
  const { name, email, message } = req.body;

  // Create a new Contact document
  const newContact = new Contact({
    name,
    email,
    message,
  });

  try {
    await newContact.save(); // Use await to save the document
    res.json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error saving contact form data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

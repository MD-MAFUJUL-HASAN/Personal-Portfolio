const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer"); // Import nodemailer

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

// Create a Nodemailer transporter using your email provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "mdtonmoy13.mt@gmail.com", // Replace with your Gmail email address
    pass: "vauj jnak qfxk scvs", // Replace with your Gmail password
  },
});

// Create a route to handle form submissions
app.post("/api/submitForm", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new Contact document
    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save(); // Use await to save the document

    // Send an automated reply email to the user
    const userMailOptions = {
      from: "mdtonmoy13.mt@gmail.com",
      to: email, // Sender's email (the one submitted in the form)
      subject: "Thank you for contacting us",
      html: `
        <p>Hello ${name},</p>
        <p>Thank you for contacting us! We have received your message:</p>
        <p>${message}</p>
        <p>We will get back to you shortly.</p>
      `,
    };

    await transporter.sendMail(userMailOptions);

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

// backend/server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000; // Choose a port for your backend

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define a route to handle form submissions
app.post("/api/submitForm", (req, res) => {
  const formData = req.body;

  // Handle the form data (e.g., save to a database)
  console.log("Received form data:", formData);

  // Respond with a success message
  res.json({ message: "Form data received successfully!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

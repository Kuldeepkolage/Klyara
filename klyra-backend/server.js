const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Klyra Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
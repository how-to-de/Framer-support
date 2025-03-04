const express = require("express");
const cors = require("cors");
const app = express();

const route = require('./routes/route');

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", route);

// 404 Handler
app.use((_req, res) => {
  res.status(404).json({ message: "Not Found" });
});

module.exports = app;

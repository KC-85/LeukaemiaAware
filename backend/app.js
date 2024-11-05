// backend/app.js
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorMiddleware");
const routes = require("./routes/index");

const app = express();
connectDB();

app.use(express.json());
app.use("/api", routes);
app.use(errorHandler);

module.exports = app;

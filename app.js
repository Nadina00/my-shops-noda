const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require('dotenv').config();

const productRouter = require("./routes/product")
const shopRouter = require("./routes/shop")


const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.options('*', cors());
app.use(express.json());


app.use("/product", productRouter)
app.use("/", shopRouter)

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;

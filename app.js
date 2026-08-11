const express = require("express");
const app = express();
const { PORT = 3001 } = process.env;
const mainRouter = require("./routes");
const mongoose = require("mongoose");
app.listen(PORT);
mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(console.error);

app.use("/", mainRouter);

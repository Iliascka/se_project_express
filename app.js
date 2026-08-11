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

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: "6a7b141bcb8520ad5d8148d8",
  };
  next();
});
app.use("/", mainRouter);

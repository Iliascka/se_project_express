const express = require("express");
const userRouter = require("./users");
const clothingItemsRouter = require("./clothingItems");
const { NotFoundError } = require("../utils/errors");

const router = express.Router();

router.use("/", userRouter);
router.use("/items", clothingItemsRouter);
router.use((req, res, next) => {
  return next(new NotFoundError("Requested resourse not found"));
});

module.exports = router;

const express = require("express");
const userRouter = require("./users");
const clothingItemsRouter = require("./clothingItems");
const { NotFoundError } = require("../utils/errors");
const {
  validateUserBody,
  validateLogin,
} = require("../middlewares/validation");
const { createUser, loginUser } = require("../controllers/users");

const router = express.Router();

router.use("/users", userRouter);
router.post("/signin", validateLogin, loginUser);
router.post("/signup", validateUserBody, createUser);
router.use("/items", clothingItemsRouter);
router.use((req, res, next) =>
  next(new NotFoundError("Requested resource not found"))
);

module.exports = router;

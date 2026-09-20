const express = require("express");
const { authorizeUser } = require("../middlewares/auth");
const {
  createUser,
  getCurrentUser,
  loginUser,
  updateProfile,
} = require("../controllers/users");

const {
  validateUserBody,
  validateLogin,
} = require("../middlewares/validation");

const router = express.Router();

router.post("/signin", validateLogin, loginUser);
router.post("/signup", validateUserBody, createUser);
router.get("/users/me", authorizeUser, getCurrentUser);
router.patch("/users/me", authorizeUser, validateUserBody, updateProfile);

module.exports = router;

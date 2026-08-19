const express = require("express");
const { authorizeUser } = require("../middlewares/auth");
const {
  createUser,
  getCurrentUser,
  loginUser,
  updateProfile,
} = require("../controllers/users");

const router = express.Router();

router.post("/signin", loginUser);
router.post("/signup", createUser);
router.get("/me", authorizeUser, getCurrentUser);
router.patch("/me", authorizeUser, updateProfile);

module.exports = router;

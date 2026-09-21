const express = require("express");
const { authorizeUser } = require("../middlewares/auth");
const { getCurrentUser, updateProfile } = require("../controllers/users");
const { validateUserBody } = require("../middlewares/validation");

const router = express.Router();

router.get("/me", authorizeUser, getCurrentUser);
router.patch("/me", authorizeUser, validateUserBody, updateProfile);

module.exports = router;

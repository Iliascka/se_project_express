const express = require("express");
const { createUser, loginUser } = require("../controllers/users");

const router = express.Router();

router.post("/signin", loginUser);
router.post("/signup", createUser);

module.exports = router;

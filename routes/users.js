const express = require("express");
const router = express.Router();
const { getUsers, createUser } = require("../controllers/users");

router.get("/", getUsers);
router.get("/:userId", getUsers);
router.post("/", createUser);

module.exports = router;

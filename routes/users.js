const express = require("express");
const router = express.Router();

router.get("/", () => {
  console.log("GET USERS");
});
router.get("/:userId", (req, res) => {
  res.send(`This is the user id:${req.params.userId}`);
});
router.post("/", () => {
  console.log("Post Users");
});

module.exports = router;

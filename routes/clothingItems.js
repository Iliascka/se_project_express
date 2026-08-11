const express = require("express");
const router = express.Router();

router.get("/", () => {
  console.log("Get Items");
});
router.post("/", () => {
  console.log("Get Items");
});
router.delete("/:itemId", () => {
  console.log("Get Items");
});

module.exports = router;

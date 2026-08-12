const express = require("express");
const router = express.Router();

const {
  getItems,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/clothingItems");

router.get("/", getItems);
router.post("/", createItem);
router.put("/:itemId", updateItem);
router.delete("/:itemId", deleteItem);

module.exports = router;

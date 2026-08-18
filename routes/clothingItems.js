const express = require("express");
const { authorizeUser } = require("../middlewares/auth");
const {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");

const router = express.Router();

router.get("/", getItems);
router.post("/", authorizeUser, createItem);
router.delete("/:itemId", authorizeUser, deleteItem);
router.put("/:itemId/likes", authorizeUser, likeItem);
router.delete("/:itemId/likes", authorizeUser, dislikeItem);

module.exports = router;

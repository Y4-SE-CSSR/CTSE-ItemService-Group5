import express from "express";
import {
  getItems,
  createItem,
  updateItem,
  deleteItem,
  getOneItem,
  getItemsByCategory,
  getItemsByBrand,
  getTopRatingItems,
  getItemsBySearch,
} from "../../controllers/item.js";

const router = express.Router();

router.get("/", getItems);
router.get("/:id", getOneItem);
router.post("/create", createItem);
router.put("/update/:id", updateItem);
router.delete("/delete/:id", deleteItem);
router.get("/category/:category", getItemsByCategory);
router.get("/brand/:brand", getItemsByBrand);
router.get("/get/top", getTopRatingItems);
router.get("/search/:search", getItemsBySearch);

export default router;

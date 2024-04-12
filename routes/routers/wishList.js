import express from "express";
import {
  getWishLists,
  createWishList,
  updateWishList,
  deleteWishList,
  getOneWishList,
  getWishListsForUser,
} from "../../controllers/wishList.js";

const router = express.Router();

router.get("/", getWishLists);
router.get("/:id", getOneWishList);
router.post("/create", createWishList);
router.put("/update/:id", updateWishList);
router.delete("/delete/:id", deleteWishList);
router.get("/user/:userId", getWishListsForUser);

export default router;

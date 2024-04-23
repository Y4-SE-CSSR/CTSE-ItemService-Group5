/**
 * @swagger
 * tags:
 *   name: WishList
 *   description: WishList management
 */

import express from "express";
import {
  getWishList,
  getOneWishList,
  getWishListsForUser,
  createWishList,
  updateWishList,
  deleteWishList,
  addItemToWishList,
  removeItemFromWishList,
} from "../../controllers/wishList.js";

const router = express.Router();


/**
 * @swagger
 * /api/wishlists:
 *   get:
 *     summary: Retrieve all wishlists
 *     tags: [WishList]
 *     responses:
 *       200:
 *         description: A list of wishlists
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WishList'
 */
router.get("/", getWishList);

/**
 * @swagger
 * /api/wishlists/{id}:
 *   get:
 *     summary: Retrieve a wishlist by ID
 *     tags: [WishList]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the wishlist
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A wishlist object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WishList'
 *       404:
 *         description: Wishlist not found
 */
router.get("/:id", getOneWishList);

/**
 * @swagger
 * /api/wishlists/user/{userId}:
 *   get:
 *     summary: Retrieve wishlists for a user
 *     tags: [WishList]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of wishlists
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WishList'
 */
router.get("/user/:userId", getWishListsForUser);

/**
 * @swagger
 * /api/wishlists:
 *   post:
 *     summary: Create a new wishlist
 *     tags: [WishList]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WishListInput'
 *     responses:
 *       201:
 *         description: Wishlist created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WishList'
 */
router.post("/", createWishList);

/**
 * @swagger
 * /api/wishlists/{id}:
 *   put:
 *     summary: Update a wishlist by ID
 *     tags: [WishList]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the wishlist to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WishListInput'
 *     responses:
 *       200:
 *         description: Wishlist updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WishList'
 *       404:
 *         description: Wishlist not found
 */
router.put("/:id", updateWishList);

/**
 * @swagger
 * /api/wishlists/{id}:
 *   delete:
 *     summary: Delete a wishlist by ID
 *     tags: [WishList]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the wishlist to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Wishlist deleted successfully
 *       404:
 *         description: Wishlist not found
 */
router.delete("/:id", deleteWishList);

/**
 * @swagger
 * /api/wishlists/{id}/addItem:
 *   put:
 *     summary: Add an item to a wishlist
 *     tags: [WishList]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the wishlist
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AddItemToWishListInput'
 *     responses:
 *       200:
 *         description: Item added to wishlist successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WishList'
 *       404:
 *         description: Wishlist not found
 */
router.put("/:id/addItem", addItemToWishList);

/**
 * @swagger
 * /api/wishlists/{id}/removeItem:
 *   put:
 *     summary: Remove an item from a wishlist
 *     tags: [WishList]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the wishlist
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RemoveItemFromWishListInput'
 *     responses:
 *       200:
 *         description: Item removed from wishlist successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WishList'
 *       404:
 *         description: Wishlist not found
 */
// router.put("/:id/removeItem", removeItemFromWishList);

/**
 * @swagger
 * components:
 *   schemas:
 *     WishList:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique identifier of the wishlist
 *         userId:
 *           type: string
 *           description: ID of the user who owns the wishlist
 *         items:
 *           type: array
 *           items:
 *             type: string
 *           description: IDs of the items in the wishlist
 *         createdOn:
 *           type: string
 *           format: date-time
 *           description: Date and time when the wishlist was created
 *         updatedOn:
 *           type: string
 *           format: date-time
 *           description: Date and time when the wishlist was last updated
 *       required:
 *         - userId
 *     WishListInput:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *           description: ID of the user who owns the wishlist
 *       required:
 *         - userId
 *     AddItemToWishListInput:
 *       type: object
 *       properties:
 *         itemId:
 *           type: string
 *           description: ID of the item to add to the wishlist
 *       required:
 *         - itemId
 *     RemoveItemFromWishListInput:
 *       type: object
 *       properties:
 *         itemId:
 *           type: string
 *           description: ID of the item to remove from the wishlist
 *       required:
 *         - itemId
 */

export default router;

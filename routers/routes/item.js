/**
 * @swagger
 * tags:
 *   name: Items
 *   description: Items management
 */


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

/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Retrieve a list of items
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: List of items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 */
router.get("/", getItems);

/**
 * @swagger
 * /api/items/{id}:
 *   get:
 *     summary: Retrieve an item by ID
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the item
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       404:
 *         description: Item not found
 */
router.get("/:id", getOneItem);

/**
 * @swagger
 * /api/items/create:
 *   post:
 *     summary: Create a new item
 *     tags: [Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ItemInput'
 *     responses:
 *       201:
 *         description: Item created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 */
router.post("/create", createItem);

/**
 * @swagger
 * /api/items/update/{id}:
 *   put:
 *     summary: Update an item by ID
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the item to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ItemInput'
 *     responses:
 *       200:
 *         description: Item updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       404:
 *         description: Item not found
 */
router.put("/update/:id", updateItem);

/**
 * @swagger
 * /api/items/delete/{id}:
 *   delete:
 *     summary: Delete an item by ID
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the item to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Item deleted successfully
 *       404:
 *         description: Item not found
 */
router.delete("/delete/:id", deleteItem);

/**
 * @swagger
 * /api/items/category/{category}:
 *   get:
 *     summary: Retrieve items by category
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         description: Name of the category
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 */
router.get("/category/:category", getItemsByCategory);

/**
 * @swagger
 * /api/items/brand/{brand}:
 *   get:
 *     summary: Retrieve items by brand
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: brand
 *         required: true
 *         description: Name of the brand
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 */
router.get("/brand/:brand", getItemsByBrand);

/**
 * @swagger
 * /api/items/get/top:
 *   get:
 *     summary: Retrieve top rating items
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: List of top rating items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 */
router.get("/get/top", getTopRatingItems);

/**
 * @swagger
 * /api/items/search/{search}:
 *   get:
 *     summary: Search items by keyword
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: search
 *         required: true
 *         description: Keyword to search for items
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of items matching the search query
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 */
router.get("/search/:search", getItemsBySearch);

export default router;

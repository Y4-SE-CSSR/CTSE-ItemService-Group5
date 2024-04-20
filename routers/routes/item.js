/**
 * @swagger
 * tags:
 *   name: Item
 *   description: Item management
 */

import express from "express";
import {
  getItems,
  createItem,
  updateItem,
  deleteItem,
  getOneItem,
  getItemsByBrand,
  getItemsBySearch,
} from "../../controllers/item.js";

const router = express.Router();

/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Retrieve a list of items
 *     tags: [Item]
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
 *     tags: [Item]
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
 *     tags: [Item]
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
 *     tags: [Item]
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
 *     tags: [Item]
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
 * /api/items/brand/{brand}:
 *   get:
 *     summary: Retrieve items by brand
 *     tags: [Item]
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
 * /api/items/search/{search}:
 *   get:
 *     summary: Search items by keyword
 *     tags: [Item]
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

/**
 * @swagger
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique identifier of the item
 *         name:
 *           type: string
 *           description: Name of the item
 *         description:
 *           type: string
 *           description: Description of the item
 *         price:
 *           type: number
 *           description: Price of the item
 *         brand:
 *           type: string
 *           description: Brand of the item
 *         category:
 *           type: string
 *           description: ID of the category the item belongs to
 *       required:
 *         - name
 *         - description
 *         - price
 *         - brand
 *         - category
 *     ItemInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the item
 *         description:
 *           type: string
 *           description: Description of the item
 *         price:
 *           type: number
 *           description: Price of the item
 *         brand:
 *           type: string
 *           description: Brand of the item
 *         category:
 *           type: string
 *           description: ID of the category the item belongs to
 *       required:
 *         - name
 *         - description
 *         - price
 *         - brand
 *         - category
 */

export default router;

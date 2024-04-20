/**
 * @swagger
 * tags:
 *   name: Review
 *   description: Review management
 */

import express from "express";
import {
  getReviews,
  createReview,
  updateReview,
  deleteReview,
  getOneReview,
  getReviewsByItem,
} from "../../controllers/review.js";

const router = express.Router();

/**
 * @swagger
 * /api/reviews:
 *   get:
 *     summary: Retrieve a list of reviews
 *     tags: [Review]
 *     responses:
 *       200:
 *         description: List of reviews
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'
 */
router.get("/", getReviews);

/**
 * @swagger
 * /api/reviews/{id}:
 *   get:
 *     summary: Retrieve a review by ID
 *     tags: [Review]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the review
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       404:
 *         description: Review not found
 */
router.get("/:id", getOneReview);

/**
 * @swagger
 * /api/reviews/create:
 *   post:
 *     summary: Create a new review
 *     tags: [Review]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReviewInput'
 *     responses:
 *       201:
 *         description: Review created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 */
router.post("/create", createReview);

/**
 * @swagger
 * /api/reviews/update/{id}:
 *   put:
 *     summary: Update a review by ID
 *     tags: [Review]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the review to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReviewInput'
 *     responses:
 *       200:
 *         description: Review updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       404:
 *         description: Review not found
 */
router.put("/update/:id", updateReview);

/**
 * @swagger
 * /api/reviews/delete/{id}:
 *   delete:
 *     summary: Delete a review by ID
 *     tags: [Review]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the review to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Review deleted successfully
 *       404:
 *         description: Review not found
 */
router.delete("/delete/:id", deleteReview);

/**
 * @swagger
 * /api/reviews/item/{id}:
 *   get:
 *     summary: Retrieve reviews by item ID
 *     tags: [Review]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the item
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of reviews
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'
 */
router.get("/item/:id", getReviewsByItem);

/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique identifier of the review
 *         item:
 *           type: string
 *           description: ID of the item being reviewed
 *         rating:
 *           type: number
 *           description: Rating of the review (from 1 to 5)
 *         comment:
 *           type: string
 *           description: Comment of the review
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date and time when the review was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date and time when the review was last updated
 *       required:
 *         - item
 *         - rating
 *         - comment
 *     ReviewInput:
 *       type: object
 *       properties:
 *         item:
 *           type: string
 *           description: ID of the item being reviewed
 *         rating:
 *           type: number
 *           description: Rating of the review (from 1 to 5)
 *         comment:
 *           type: string
 *           description: Comment of the review
 *       required:
 *         - item
 *         - rating
 *         - comment
 */

export default router;

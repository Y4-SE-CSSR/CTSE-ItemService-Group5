import mongoose from 'mongoose';
import { expect } from 'chai';
import { MongoMemoryServer } from 'mongodb-memory-server-global';

import Review from "../models/review.js";

describe('Review Add', () => {
    let mongoServer;
    let mongoUri;

    before(async () => {
        // Start the in-memory MongoDB server
        mongoServer = new MongoMemoryServer();
        await mongoServer.start();

        // Get the URI of the in-memory database
        mongoUri = await mongoServer.getUri();

        // Connect to the in-memory database
        await mongoose.connect(mongoUri);
    });

    after(async () => {
        // Stop the in-memory MongoDB server and disconnect from the database
        await mongoose.disconnect();
        await mongoServer.stop();
    });

    it('should save a new review', async () => {
        const reviewData = {
            rating: 5,
            comment: 'Great product'
        };

        const review = new Review(reviewData);

        try {
            const savedReview = await review.save();
            expect(savedReview.rating).to.equal(reviewData.rating);
            expect(savedReview.comment).to.equal(reviewData.comment);

        } catch (err) {
            expect.fail('Review should have saved successfully');
        }
    });

    it('should not save a review when required fields are missing', async () => {
        const review = new Review({});

        try {
            await review.validate(); // Explicitly validate the review
            expect.fail('Validation should have failed');
        } catch (err) {
            expect(err).to.exist;
            expect(err.errors).to.haveOwnProperty('rating');
            expect(err.errors).to.haveOwnProperty('comment');
        }
    });
});

import mongoose from 'mongoose';
import { expect } from 'chai';
import { MongoMemoryServer } from 'mongodb-memory-server-global';

import WishList from "../models/wishList.js";

describe('WishList Add', () => {
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

    it('should save a new wish list', async () => {
        const wishListData = {
            userId: '123',
            items: []
        };

        const wishList = new WishList(wishListData);

        try {
            const savedWishList = await wishList.save();
            expect(savedWishList.userId).to.equal(wishListData.userId);
            expect(savedWishList.items).to.have.lengthOf(0);

        } catch (err) {
            expect.fail('WishList should have saved successfully');
        }
    });

    it('should not save a wish list when required fields are missing', async () => {
        const wishList = new WishList({});

        try {
            await wishList.validate(); // Explicitly validate the wish list
            expect.fail('Validation should have failed');
        } catch (err) {
            expect(err).to.exist;
            expect(err.errors).to.haveOwnProperty('userId');
        }
    });
});

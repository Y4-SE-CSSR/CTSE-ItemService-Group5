import mongoose from 'mongoose';
import { expect } from 'chai';
import { MongoMemoryServer } from 'mongodb-memory-server-global';

import Category from "../models/category.js";

describe('Category Add', () => {
    let mongoServer;
    let mongoUri;

    before(async () => {
        // Start the in-memory MongoDB server
        mongoServer = new MongoMemoryServer();
        await mongoServer.start();

        // Get the URI of the in-memory database
        mongoUri = mongoServer.getUri();

        // Connect to the in-memory database
        mongoose.connect(mongoUri);
    });

    after(async () => {
        // Stop the in-memory MongoDB server and disconnect from the database
        await mongoose.disconnect();
        await mongoServer.stop();
    });

    it('should save a new category', async () => {
        const categoryData = {
            name: 'Electronics',
            description: 'Electronics category'
        };

        const category = new Category(categoryData);

        try {
            const savedCategory = await category.save();
            expect(savedCategory.name).to.equal(categoryData.name);
            expect(savedCategory.description).to.equal(categoryData.description);

        } catch (err) {
            expect.fail('Category should have saved successfully');
        }
    });

    it('should not save a category when empty object sent', async () => {
        const category = new Category({
            // Missing required fields
        });

        try {
            await category.save();
            expect.fail('Validation should have failed');
        } catch (err) {
            expect(err).to.exist;
        }
    });
});

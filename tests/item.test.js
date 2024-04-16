import mongoose from 'mongoose';
import { expect } from 'chai';
import { MongoMemoryServer } from 'mongodb-memory-server-global';

import Item from "../models/item.js";

describe('Item Add', () => {
    let mongoServer;
    let mongoUri;

    before(async () => {
        // Start the in-memory MongoDB server
        mongoServer = await MongoMemoryServer.create();
        mongoUri = mongoServer.getUri();

        // Connect to the in-memory database
        await mongoose.connect(mongoUri);
    });

    after(async () => {
        // Disconnect from the in-memory database and stop the server
        await mongoose.disconnect();
        await mongoServer.stop();
    });

    it('should save a new item', async () => {
        const itemData = {
            name: 'Laptop',
            description: 'Laptop description',
            price: 1000,
            brand: 'Dell'
        };

        const item = new Item(itemData);

        try {
            const savedItem = await item.save();
            expect(savedItem.name).to.equal(itemData.name);
            expect(savedItem.description).to.equal(itemData.description);
            expect(savedItem.price).to.equal(itemData.price);
            expect(savedItem.brand).to.equal(itemData.brand);
        } catch (err) {
            expect.fail('Item should have saved successfully');
        }
    });

    it('should not save an item when required fields are missing', async () => {
        const item = new Item({});

        try {
            await item.validate(); // Explicitly validate the item
            expect.fail('Validation should have failed');
        } catch (err) {
            expect(err).to.exist;
        }
    });
});
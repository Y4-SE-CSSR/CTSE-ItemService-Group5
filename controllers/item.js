import Item from "../models/item.js";

export const getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const createItem = async (req, res) => {
    const item = req.body;
    const newItem = new Item(item);
    try {
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateItem = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    try {
        const item = await Item.findByIdAndUpdate(id, update);
        res.status(200).json(item);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteItem = async (req, res) => {
    const id = req.params.id;
    try {
        await Item.findByIdAndRemove(id);
        res.status(200).json({ message: "Item deleted successfully." });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getOneItem = async (req, res) => {
    const id = req.params.id;
    try {
        const item = await Item.findById(id);
        res.status(200).json(item);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


//get all items by category
export const getItemsByCategory = async (req, res) => {
    const category = req.params.category;
    try {
        const items = await Item.find({ category: category });
        res.status(200).json(items);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//get all items by brand
export const getItemsByBrand = async (req, res) => {
    const brand = req.params.brand;
    try {
        const items = await Item.find({ brand: brand });
        res.status(200).json(items);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//get items by search
export const getItemsBySearch = async (req, res) => {
    const search = req.params.search;
    try {
        const items = await Item.find({
            $or: [
                { name: { $regex: search, $options: 'i' } },
                { category: { $regex: search, $options: 'i' } },
                { brand: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ]
        });
        res.status(200).json(items);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
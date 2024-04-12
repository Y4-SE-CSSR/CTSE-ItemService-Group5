import WishList from "../models/wishList.js";

export const getWishList = async (req, res) => {
    try {
        const wishList = await WishList.find();
        res.status(200).json(wishList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// get one wish list
export const getOneWishList = async (req, res) => {
    const { id } = req.params;
    try {
        const wishList = await WishList.findById(id);
        res.status(200).json(wishList);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// get wish lists for a user
export const getWishListsForUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const wishLists = await WishList.find({ userId });
        res.status(200).json(wishLists);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// create a wish list
export const createWishList = async (req, res) => {
    const wishList = req.body;
    const newWishList = new WishList(wishList);
    try {
        await newWishList.save();
        res.status(201).json(newWishList);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// update a wish list
export const updateWishList = async (req, res) => {
    const { id } = req.params;
    const { userId, items } = req.body;
    try {
        const updatedWishList = await WishList.findByIdAndUpdate(id, { userId, items }, { new: true });
        res.status(200).json(updatedWishList);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// delete a wish list
export const deleteWishList = async (req, res) => {
    const { id } = req.params;
    try {
        await WishList.findByIdAndRemove(id);
        res.json({ message: "WishList deleted successfully." });
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// add an item to a wish list
export const addItemToWishList = async (req, res) => {
    const { id } = req.params;
    const { itemId } = req.body;
    try {
        const updatedWishList = await WishList.findByIdAndUpdate(id, { $push: { items: itemId } }, { new: true });
        res.status(200).json(updatedWishList);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// remove an item from a wish list
export const removeItemFromWishList = async (req, res) => {
    const { id } = req.params;
    const { itemId } = req.body;
    try {
        const updatedWishList = await WishList.findByIdAndUpdate(id, { $pull: { items: itemId } }, { new: true });
        res.status(200).json(updatedWishList);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}


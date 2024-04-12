import WishList from "../models/wishList.js";

export const getWishLists = async (req, res) => {
    try {
        const wishLists = await WishList.find();
        res.status(200).json(wishLists);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

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

export const updateWishList = async (req, res) => {
    const id = req.params.id;
    const updatedWishList = req.body;
    try {
        const wishList = await WishList.findByIdAndUpdate(id, updatedWishList, { new: true });
        res.status(200).json(wishList);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteWishList = async (req, res) => {
    const id = req.params.id;
    try {
        await WishList.findByIdAndRemove(id);
        res.status(200).json({ message: "WishList deleted successfully." });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getOneWishList = async (req, res) => {
    const id = req.params.id;
    try {
        const wishList = await WishList.findById(id);
        res.status(200).json(wishList);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getWishListsForUser = async (req, res) => {
    const userId = req.params.userId; 
    try {
        const wishLists = await WishList.find({ userId: userId });
        res.status(200).json(wishLists);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const WishListSchema = new Schema({
    userId: {
        type: String,
        required: true 
    },
    items: [{
        type: Schema.Types.ObjectId,
        ref: 'Item' 
    }]
}, {
    timestamps: {
        createdAt: 'createdOn',
        updatedAt: 'updatedOn'
    }
});

const WishList = mongoose.model("WishList", WishListSchema);

export default WishList;

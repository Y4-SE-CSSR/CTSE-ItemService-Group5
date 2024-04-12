import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    item: {
        type: Schema.Types.ObjectId,
        ref: "Item",
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

ReviewSchema.index({ item: 1 });

const Review = mongoose.model("Review", ReviewSchema);

export default Review;

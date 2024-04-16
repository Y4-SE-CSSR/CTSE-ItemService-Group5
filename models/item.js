import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: 10
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
    },
}, {
    timestamps: {
        createdAt: 'createdOn',
        updatedAt: 'updatedOn'
    }
});

ItemSchema.index({ category: 1 });

const Item = mongoose.model("Item", ItemSchema);

export default Item;
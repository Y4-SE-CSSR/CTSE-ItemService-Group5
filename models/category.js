import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        minlength: 10
    }
}, {
    timestamps: {
        createdAt: 'createdOn',
        updatedAt: 'updatedOn'
    }
});

CategorySchema.index({ name: 1 });

const Category = mongoose.model("Category", CategorySchema);

export default Category;
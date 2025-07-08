import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    price: {
        type:Number,
        required: true
    },

    stock: {
        type: String,
        required: true
    },

    discountPrice:{
        type: Number
    },

    image: {
        type: String
    },

    status: {
        type: String,
        enum: ["in stock", "out stock"],
        default: "in stock"
    },

    category_id: {
        type: mongoose.Schema.Types.ObjectId, ref: "Category"
    }


},{timestamps:true, versionKey:false});

const Product = mongoose.model("Product", productSchema);
export default Product;
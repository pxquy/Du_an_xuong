import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId, ref:"Product"
    },

    customer_id: {
        type: mongoose.Schema.Types.ObjectId, ref:"User"
    },

    quantity: {
        type: Number,
        required: true
    },

    total_price: {
        type: Number,
        required: true
    }
},{timestamps: true});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
import mongoose from "mongoose";

const orderDetailSchema = new mongoose.Schema(
  {
    order_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const OrderDetail = mongoose.model("OrderDetail", orderDetailSchema);

export default OrderDetail;

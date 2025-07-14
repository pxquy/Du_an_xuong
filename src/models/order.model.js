import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const orderSchema = new mongoose.Schema(
  {
    customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    order_date: {
      type: Date,
    },
    price: {
      type: Number,
    },
    total_price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    status: {
      type: String,
      enum: [
        "Chờ xử lý",
        "Đang xác nhận",
        "Đang giao hàng",
        "Thành công",
        "Huỷ",
      ],
      default: "Chờ xử lý",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

orderSchema.plugin(mongoosePaginate);

const Order = mongoose.model("Order", orderSchema);

export default Order;

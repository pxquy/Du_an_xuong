import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const ratingSchema = new mongoose.Schema(
  {
    customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    rating_date: {
      type: Date,
    },
    commit: {
      type: String,
    },
    star: {
      type: Number,
      min: 1,
      max: 5,
      default: 1,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const mongoose = require('mongoose');

ratingSchema.plugin(mongoosePaginate);
const ratingSchema = new mongoose.Schema({
  productId: String,
  userId: String,
  comment: String,
  star: Number,
}, { timestamps: true });
const Rating = mongoose.model("Rating", ratingSchema);

export default Rating;

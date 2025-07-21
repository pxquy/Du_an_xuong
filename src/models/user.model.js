import { required } from "joi";
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Trường này bắt buộc nhập!"],
    },
    email: {
      type: String,
      unique: [true, "Trường này đã tồn tại!"],
      required: [true, "Trường này bắt buộc nhập!"],
    },
    password: {
      type: String,
      unique: true,
      required: [true, "Trường náy bắt buộc nhập!"],
    },
    address: {
      type: [String],
    },
    numberPhone: {
      type: String,
      unique: true,
      required: [true, "Trường này bắt buộc nhập!"],
    },
    gender: {
      type: String,
      enum: ["nam", "nữ"],
      default: "name",
    },
    roles: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.plugin(mongoosePaginate);

const User = mongoose.model("User", userSchema);

export default User;

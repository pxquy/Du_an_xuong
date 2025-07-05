import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log(`kết tối thành công ${process.env.MONGO_DB}`);
  } catch (error) {
    console.error(`Kết nối ${process.env.MONGO_DB} thất bại!`);
  }
};

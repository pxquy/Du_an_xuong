import mongoose from "mongoose";

const slideShowSchema = new mongoose.Schema(
  {
    banner: {
      type: [String],
    },
  },
  { timestamps: true }
);

const SlideShow = mongoose.model("SlideShow", slideShowSchema);
export default SlideShow;

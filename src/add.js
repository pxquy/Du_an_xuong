import express from "express";
import dotenv from "dotenv";

dotenv.config();

const add = express();

add.listen(process.env.PORT, () => {
  console.log(`Kết nối thành công tới server ${process.env.PORT}`);
});

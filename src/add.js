import express from "express";
import dotenv from "dotenv";
import productRouter from "./routers/products.router";

dotenv.config();

const add = express();

add.use('/products',productRouter)

add.listen(process.env.PORT, () => {
  console.log(`Kết nối thành công tới server ${process.env.PORT}`);
});

import express from "express";
import dotenv from "dotenv";
import productRouter from "./routers/products.router.js";
import categoriesRouter from "./routers/categories.router.js";
import cartRouter from "./routers/cart.router.js";

dotenv.config();

const add = express();

add.use('/products',productRouter);
add.use('/category',categoriesRouter);
add.use('/cart',cartRouter);

add.listen(process.env.PORT, () => {
  console.log(`Kết nối thành công tới server ${process.env.PORT}`);
});

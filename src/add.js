import express from "express";
import dotenv from "dotenv";
import productRouter from "./routers/products.router.js";
import categoriesRouter from "./routers/categories.router.js";
import cartRouter from "./routers/cart.router.js";
import { connectDB } from "./config/database.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.use('/products',productRouter);
app.use('/category',categoriesRouter);
app.use('/cart',cartRouter);

app.listen(process.env.PORT, () => {
  console.log(`Kết nối thành công tới server ${process.env.PORT}`);
});

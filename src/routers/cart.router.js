import express from "express"
import { cartCreate, cartDelete, cartUpdate, getAllCart, getCartById } from "../controllers/cart.controller";

const cartRouter = express.Router()

cartRouter.get("/", getAllCart);
cartRouter.get("/:id", getCartById);
cartRouter.post("/", cartCreate);
cartRouter.put("/:id", cartUpdate);
cartRouter.delete("/:id", cartDelete);

export default cartRouter;
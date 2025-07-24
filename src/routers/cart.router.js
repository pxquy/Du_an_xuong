import express from "express"
import { cartCreate, cartDelete, cartUpdate, getAllCart, getCartById } from "../controllers/cart.controller.js";
import { validateRequest } from "../middleware/validate.js";
import cartValidation from "../validations/cart.validate.js";

const cartRouter = express.Router()

cartRouter.get("/", getAllCart);
cartRouter.get("/:id", getCartById);
cartRouter.post("/",validateRequest(cartValidation), cartCreate);
cartRouter.put("/:id",validateRequest(cartValidation), cartUpdate);
cartRouter.delete("/:id", cartDelete);

export default cartRouter;
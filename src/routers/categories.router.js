import express from "express"
import { categoriesCreate, categoriesDelete, categoriesUpdate, getAllCategories } from "../controllers/categories.controller.js";

const categoriesRouter = express.Router()

categoriesRouter.get("/", getAllCategories);
categoriesRouter.get("/:id", getAllCategories);
categoriesRouter.post("/", categoriesCreate);
categoriesRouter.put("/:id", categoriesUpdate);
categoriesRouter.delete("/:id", categoriesDelete);

export default categoriesRouter;
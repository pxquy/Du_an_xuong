import express from "express"
import { categoriesCreate, categoriesDelete, categoriesUpdate, getAllCategories } from "../controllers/categories.controller.js";
import { validateRequest } from "../middleware/validate.js";
import categoryValidation from "../validations/categories.validate.js";

const categoriesRouter = express.Router()

categoriesRouter.get("/", getAllCategories);
categoriesRouter.get("/:id", getAllCategories);
categoriesRouter.post("/",validateRequest(categoryValidation), categoriesCreate);
categoriesRouter.put("/:id",validateRequest(categoryValidation), categoriesUpdate);
categoriesRouter.delete("/:id", categoriesDelete);

export default categoriesRouter;
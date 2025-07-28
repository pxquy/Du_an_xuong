import express from "express"; 
import {
  getAllProducts,
  getProductById,
  productCreate,
  productDelete,
  productUpdate
} from "../controllers/products.controller.js";
import { validateRequest } from "../middleware/validate.js"; 
import productValidation from "../validations/product.validate.js";

const productRouter = express.Router(); 

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/", validateRequest(productValidation), productCreate);
productRouter.put("/:id", validateRequest(productValidation), productUpdate);
productRouter.delete("/:id", productDelete); 

export default productRouter;
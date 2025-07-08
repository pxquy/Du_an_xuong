import expree from "express"
import { getAllProducts, getProductById, productCreate, productDelete, productUpdate } from "../controllers/products.controller";

const productRouter = expree.Router();
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/", productCreate);
productRouter.put("/:id", productUpdate);
productRouter.delete("/id", productDelete);

export default productRouter;
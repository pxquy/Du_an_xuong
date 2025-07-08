import expree from "express"
import { getAllProducts } from "../controllers/products.controller";

const productRouter = expree.Router();
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getAllProducts);
productRouter.post("/", getAllProducts);
productRouter.put("/:id", getAllProducts);
productRouter.delete("/id", getAllProducts);

export default productRouter;
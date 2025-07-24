import Product from "../models/products.model.js"

export const getAllProducts = async (req,res) => {
    try {
        const products = await Product.find().populate("category_id");
        res.status(201).json(products)
    } catch (error) {
        res.status(500).json({
            message: "Lỗi",
            error: error.message
        });
    }
}

export const getProductById = async (req,res) => {
    try {
        const product = await Product.findById(req.params.id).populate("category_id");
        if (!product) return res.status(404).json({message: "Sản phẩm không tồn tại"});
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({
            message: "Lỗi",
            error: error.message
        });
    }
}
export const productCreate = async (req,res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json({message:"Thêm thành công",product})
    } catch (error) {
        res.status(500).json({
            message: "Lỗi",
            error: error.message
        });
    }
}
export const productUpdate = async (req,res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!product) return res.status(404).json({message: "Sản phẩm không tồn tại"});
        res.status(201).json({message:"Cập nhật thành công",product})
    } catch (error) {
        res.status(500).json({
            message: "Lỗi",
            error: error.message
        });
    }
}
export const productDelete = async (req,res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({message: "Sản phẩm không tồn tại"});
        res.status(201).json({message:"Xoá thành công"})
    } catch (error) {
        res.status(500).json({
            message: "Lỗi",
            error: error.message
        });
    }
}
import Cart from "../models/cart.model.js"

export const getAllCart = async (req,res) => {
    try {
        const cart = await Cart.find().populate("product_id").populate("customer_id");
        res.status(201).json(cart)
    } catch (error) {
        res.status(500).json({
            message: "Lỗi",
            error: error.message
        });
    }
};

export const getCartById = async (req,res) => {
    try {
        const carts = await Cart.findById(req.params.id).populate("product_id").populate("customer_id");
        if(!carts) return res.status(404).json({message:"Không tìm thấy sản phẩm trogn giỏ"});
        res.status(201).json(carts)
    } catch (error) {
         res.status(500).json({
            message: "Lỗi",
            error: error.message
        });
    }
};
export const cartCreate = async (req,res) => {
    try {
        const carts = await Cart.create(req.body)
        res.status(200).json({message:"Thêm sản phẩm vào giỏ thành công",carts})
    } catch (error) {
         res.status(500).json({
            message: "Lỗi",
            error: error.message
        });
    }
};
export const cartUpdate = async (req,res) => {
    try {
        const carts = await Cart.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!carts) return res.status(404).json({message:"Không tìm thấy sản phẩm trogn giỏ"});
        res.status(201).json({message:"Cập nhật sản phẩm vào giỏ thành công",carts})
    } catch (error) {
         res.status(500).json({
            message: "Lỗi",
            error: error.message
        });
    }
};
export const cartDelete = async (req,res) => {
    try {
        const carts = await Cart.findByIdAndDelete(req.params.id);
        if(!carts) return res.status(404).json({message:"Không tìm thấy sản phẩm trogn giỏ"});
        res.status(201).json({message:"Xoá thành công"})
    } catch (error) {
         res.status(500).json({
            message: "Lỗi",
            error: error.message
        });
    }
};


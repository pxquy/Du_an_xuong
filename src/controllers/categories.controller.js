import Category from "../models/categories.model"

export const getAllCategories = async (req,res) => {
    try {
        const categories = await Category.find();
        res.status(201).json(categories)
    } catch (error) {
        res.status(500).json(error,"Lỗi")
    }
}

export const getCategoriesById = async (req,res) => {
    try {
        const category = await Category.findById(req.params.id);
        if(!category) return res.status(404).json({message:"Danh mục không tồn tại"}, category);
        res.status(201).json(category)
    } catch (error) {
         res.status(500).json(error,"Lỗi")
    }
}
export const categoriesCreate = async (req,res) => {
    try {
        const category = await Category.create(req.body);
        res.status(200).json({message:"Thêm thành công"}, category);
    } catch (error) {
         res.status(500).json(error,"Lỗi")
    }
}
export const categoriesUpdate = async (req,res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, rea.body, {new: true});
        if(!category) return res.status(404).json({message:"Danh mục không tồn tại"}, category);
        res.status(201).json({message:"cập nhật thành công"},category)
    } catch (error) {
         res.status(500).json(error,"Lỗi")
    }
}
export const categoriesDelete = async (req,res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if(!category) return res.status(404).json({message:"Danh mục không tồn tại"}, category);
        res.status(201).json({message:"Xoá thành công"})
    } catch (error) {
         res.status(500).json(error,"Lỗi")
    }
}
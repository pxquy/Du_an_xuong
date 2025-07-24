import Joi from "joi";

const productValidation = Joi.object({
    name: Joi.string().required().messages({
        "any.required": "Tên sản phẩm là bắt buộc",
        "string.empty": "Tên sản phẩm không được để trống",
    }),

    slug: Joi.string().required().messages({
        "any.required": "Slug sản phẩm là bắt buộc",
        "string.empty": "Slug sản phẩm không được để trống",
    }),

    price: Joi.number().required().messages({
        "any.required": "Giá sản phẩm là bắt buộc",
        "number.base": "Giá sản phẩm phải là số",
    }),

    stock: Joi.number().required().messages({
        "any.required": "TỒn kho là bắt buộc",
        "number.base": "Tồn kho phải là số nguyên",
    }),

    category_id: Joi.string().required().messages({
        "any.required": "Danh mục sản phẩm là bắt buộc",
        "string.empty": "category_id không được để trống",
    }),
});
export default productValidation;
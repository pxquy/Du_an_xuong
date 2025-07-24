import Joi from "joi";

const categoryValidation = Joi.object({
    name: Joi.string().required().messages({
        "any.required": "Tên danh mục là bắt buộc",
        "string.empty": "Tên danh mục không được để trống",
    })
});
export default categoryValidation;
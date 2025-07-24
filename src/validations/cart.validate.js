import Joi from "joi";

const cartValidation = Joi.object({
    product_id: Joi.string().required().messages({
        "any.required": "Thiếu product_id",
        "string.empty":"product_id không được để trống",
    }),

    customer_id: Joi.string().required().messages({
        "any.required":"Thiếu customer_id",
        "string.empty":"customer_id không được để trống",
    }),

    quatity: Joi.number().required().messages({
        "any.required": "Thiếu số lượng",
        "number.base": "số lượng phải là số",
        "number.min": "số lượng phải ít nhất là 1",
    }),

    total_price: Joi.number().required().messages({
        "any.required": "Thiếu tổng tiền",
        "number.base": "tổng tiền phải là số",
    }),
});

export default cartValidation;
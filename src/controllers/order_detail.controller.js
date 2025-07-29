import User from "../models/user.model";
import Order from "../models/order.model";
import OrderDetail from "../models/order_detail.model";

export const getAllOrderDetail = async (req, res) => {
  try {
    const orderDetails = await OrderDetail.find()
      .populate("order_id", "customer_id status")
      .populate("product_id", "name price");

    if (orderDetails.length === 0) {
      return res.status(200).json({
        message: "Hiện tại danh sách chi tiết Đơn hàng đang rỗng",
      });
    }

    res.status(200).json(orderDetails);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

export const getOrderDetailByOrderId = async (req, res) => {
  try {
    const details = await OrderDetail.find({
      order_id: req.params.orderId,
    }).populate("product_id", "name price");

    if (details.length === 0) {
      return res.status(404).json({
        message: "Không tìm thấy chi tiết đơn hàng cho đơn hàng này",
      });
    }

    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

export const createOrderDetail = async (req, res) => {
  try {
    const newDetail = await OrderDetail.create(req.body);
    res.status(201).json({
      message: "Thêm chi tiết đơn hàng thành công",
      data: newDetail,
    });
  } catch (error) {
    res.status(400).json({ message: "Thêm thất bại", error });
  }
};

export const updateOrderDetail = async (req, res) => {
  try {
    const updatedDetail = await OrderDetail.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedDetail) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy chi tiết đơn hàng" });
    }

    res.status(200).json({
      message: "Cập nhật thành công",
      data: updatedDetail,
    });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

export const deleteOrderDetail = async (req, res) => {
  try {
    const deleted = await OrderDetail.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy chi tiết đơn hàng" });
    }

    res.status(200).json({ message: "Xoá thành công" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

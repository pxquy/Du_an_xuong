import User from "../models/user.model";
import Order from "../models/order.model";

export const getAllOrders = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const orders = await Order.paginate(
      {},
      {
        page,
        limit,
        populate: { path: "customer_id", select: "name email" },
        sort: { createdAt: -1 },
      }
    );

    if (orders.docs.length === 0) {
      return res.status(200).json({ message: "Không có đơn hàng nào." });
    }

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "customer_id",
      "name email"
    );
    if (!order) {
      return res.status(404).json({ message: "Không tìm thấy đơn hàng" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

export const createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).json({
      message: "Tạo đơn hàng thành công",
      data: newOrder,
    });
  } catch (error) {
    res.status(400).json({ message: "Tạo đơn hàng thất bại", error });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ message: "Không tìm thấy đơn hàng" });
    }

    res.status(200).json({ message: "Cập nhật thành công", data: order });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Không tìm thấy đơn hàng" });
    }
    res.status(200).json({ message: "Xoá đơn hàng thành công" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

export const getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ customer_id: req.params.userId }).sort({
      createdAt: -1,
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

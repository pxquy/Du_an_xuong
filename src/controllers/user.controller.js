import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// [POST] /signup - Đăng ký
export const signup = async (req, res) => {
  try {
    const { userName, email, password, address, numberPhone, gender } = req.body;

    const used = await User.findOne({ email });
    if (used) {
      return res.status(400).json({
        message: "Email này đã tồn tại, vui lòng thử lại!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
      address,
      numberPhone,
      gender,
    });

    return res.status(201).json({
      message: "Đăng ký thành công!",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi không tạo được tài khoản!",
      error: error.message,
    });
  }
};

// [POST] /signin - Đăng nhập
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Tài khoản này không tồn tại!",
      });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({
        message: "Nhập sai mật khẩu, vui lòng thử lại!",
      });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.KEYWORD, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      message: "Đăng nhập thành công!",
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi đăng nhập!",
      error: error.message,
    });
  }
};

// [GET] /users - Danh sách user (có phân trang)
export const userList = async (req, res) => {
  try {
    const { _page = 1, _limit = 5 } = req.query;
    const options = {
      page: _page,
      limit: _limit,
    };
    const userList = await User.paginate({}, options);
    if (!userList.docs || userList.docs.length === 0) {
      return res.status(200).json({
        message: "Hiện tại danh sách người dùng đang trống!",
      });
    }

    return res.status(200).json({
      message: "Danh sách người dùng",
      data: userList,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi không thể lấy danh sách người dùng!",
      error: error.message,
    });
  }
};

// [GET] /users/:id - Lấy user theo ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({ message: "Không tìm thấy người dùng!" });

    return res.status(200).json({
      message: "Chi tiết người dùng",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};

// [PUT] /users/:id - Cập nhật thông tin user
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedUser)
      return res.status(404).json({ message: "Người dùng không tồn tại!" });

    return res.status(200).json({
      message: "Cập nhật người dùng thành công!",
      data: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi cập nhật người dùng!",
      error: error.message,
    });
  }
};

// [DELETE] /users/:id - Xoá user
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "Người dùng không tồn tại!" });

    return res.status(200).json({
      message: "Xoá người dùng thành công!",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi xoá người dùng!",
      error: error.message,
    });
  }
};

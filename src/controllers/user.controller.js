import User from "user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { userName, email, password, address, numberPhone, gender } =
      req.body;

    const used = await User.findOne({ email });
    if (used)
      return res.status(400).json({
        message: "Email này đã tông tại vui lòng thử lại!",
      });

    const securityPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      userName,
      email,
      password: securityPassword,
      address,
      numberPhone,
      gender,
    });
    securityPassword = undefined;

    return res.status(201).json({
      message: "Đăng ký thanh công!",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi không tạo được tài khoản!",
      error: error.message,
    });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const used = await User.findOne({ email });
    if (!used)
      return res.status(400).json({
        message: "Tài khoản này không tồn tại!",
      });

    const passwordCompare = await bcrypt.compare(password, { user: password });
    if (!passwordCompare)
      return res.status(400).json({
        message: "Nhập sai thông tin mật khẩu vui lòng thử lại!",
      });

    const user = jwt.sign({ user: _id }, process.env.KEYWORD, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      message: "Đăng nhập thành công!",
      data: user,
    });
  } catch (error) {
    res.status(500).json({});
  }
};

export const userList = async (req, res) => {
  try {
    const { _page = 1, _limit = 5 } = req.query;
    const options = {
      page: _page,
      limit: _limit,
    };
    const userList = await User.paginate({}, options);
    if (userList.length == 0)
      return res.status(200).json({
        message: "Hiện tại danh sách người dùng đang trống!",
      });
    return res.status(200).json({
      message: "Danh sách người dùng",
      data: userList,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi không thể tìm thấy dữu liệu!",
      error: error.message,
    });
  }
};

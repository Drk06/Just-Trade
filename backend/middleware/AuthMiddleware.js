import jwt from "jsonwebtoken";
import User from "../model/UserModel.js";

const userVerification = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ status: false, message: "Token missing" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ status: false });
    }

    res.json({
      status: true,
      user: user.username,
    });
  } catch (err) {
    console.error("JWT ERROR:", err.message);
    res.status(401).json({ status: false });
  }
};

export default userVerification;

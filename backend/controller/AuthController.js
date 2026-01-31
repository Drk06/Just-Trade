import User from '../model/UserModel.js';
import createSecretToken from "../utils/SecretToken.js";
import bcrypt from "bcrypt";

const Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const user = await User.create({ email, password, username });

    const token = createSecretToken(user._id);

    res.status(201).json({
      success: true,
      message: "Signup successful",
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ success: false, message: "All fields required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = createSecretToken(user._id);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};


export  {Signup,Login};
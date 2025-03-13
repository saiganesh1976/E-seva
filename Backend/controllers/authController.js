import userModel from "../Models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";

// logIn user
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username });
    if (!user) {
      return res.json({ success: false, message: "User doesn't Exists" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({
      success: true,
      token,
      user: { username: user.username, email: user.email }, // Return user details
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};


//register user
const registerUser = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User Already Exists" });
    }

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    //encrpt the user password
    const salt = await bcrypt.genSalt(10); //5-15
    const hashedpassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      username: username,
      email: email,
      password: hashedpassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const logoutUser = (req, res) => {
    res.json({ success: true, message: "User logged out successfully" });
  };

export { loginUser, registerUser,logoutUser };

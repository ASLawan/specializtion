import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";
import authenticate from "../middlware/authorize.js";
import { adminCheck } from "../middlware/authorize.js";

const router = express.Router();
dotenv.config();

const secret = process.env.SECRET;

// Authenticate user
// const authenticate = (req, res, next) => {
//   const token = req.header("Authorization")?.replace("Bearer ", "");
//   if (!token) {
//     return res.status(401).json({ message: "Not Authorized" });
//   }
//   try {
//     const decoded = jwt.verify(token, secret);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ error: "Invalid token" });
//   }
// };

// Register new user
router.post("/register", async (req, res) => {
  const { name, email, password, isAdmin } = req.body;

  if (!name || !email || !password) {
    return res.status(401).json({ Error: "Incomplete user information" });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email must be unique" });
    }
    const hashedPwd = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPwd, isAdmin });
    await newUser.save();

    // const token = jwt.sign(
    //   { userId: newUser._id, isAdmin: user.isAdmin },
    //   secret,
    //   {
    //     expiresIn: "1h",
    //   }
    // );

    return res
      .status(201)
      .json({ user: newUser, message: "User created successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ Error: "Server error" });
  }
});

//Login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Imcomplete user credentials" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid user credentials" });
    }

    const correctPass = await bcrypt.compare(password, user.password);

    if (!correctPass) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: "1h" });

    console.log(`Succesfully logged in ${user.name}`);
    return res.status(200).json({ token, user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

// Update user
router.put("/update", authenticate, adminCheck, async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (name) {
      user.name = name;
    }
    if (email) {
      user.email = email;
    }
    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }
    await user.save();
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Delete user
router.delete("/delete", authenticate, adminCheck, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    await user.remove();
    res.status(200).json({ message: "User successfully deleted!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;

import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find({}, "_id name email isAdmin");
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

const secret = process.env.SECRET;

const authenticate = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "Not Authorized" });
  }
  try {
    const decoded = jwt.verify(token, secret);

    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

export const adminCheck = (user) => {
  if (!user) {
    return res.status(401).json({ message: "User not found!" });
  }

  if (!user.isAdmin) {
    return res.status(403).json({ message: "Access Denied!. Admins Only!" });
  }
};
export default authenticate;

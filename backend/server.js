import express from "express";
import cors from "cors";
import connectToDb from "./utils/connect.js";
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/products.js";
import cartRoutes from "./routes/cart.js";
import orderRoutes from "./routes/orders.js";
import userRoutes from "./routes/users.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API is running");
});

// connect to Mongo Atlas
connectToDb();
// mongoose
//   .connect("mongodb://localhost:5000/", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Successfully connected to mongodb");
//   });

//listen
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on localhost at port: ${PORT}`);
});

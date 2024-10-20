import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, required: true, default: 0 },
    },
  ],
  totalAmount: { type: Number, default: 0 },
});

export default mongoose.model("Cart", cartSchema);

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrders = createAsyncThunk("orders/fetchorders", async () => {
  const response = await axios.get("/api/orders");
  return response.data;
});

export const deleteOrder = createAsyncThunk(
  "orders/deleteOrder",
  async (id) => {
    await axios.delete(`/api/orders${id}`);
    return id;
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    laoding: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.laoding = true;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.laoding = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.laoding = false;
        state.error = action.error.message;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.orders = state.orders.filter(
          (order) => order._id !== action.payload.id
        );
      });
  },
});

export default orderSlice.reducer;

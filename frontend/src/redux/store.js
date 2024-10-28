import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import productReducer from "./productSlice";
import ordersReducer from "./orderSlice";
import usersReducer from "./usersSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    orders: ordersReducer,
    users: usersReducer,
    cart: cartReducer,
  },
});

export default store;

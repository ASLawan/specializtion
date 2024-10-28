import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:5000";
// fetch all users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(`${baseUrl}/api/users`);
  return response.data;
});

export const deleteUser = createAsyncThunk("users/deleteuser", async (id) => {
  await axios.delete(`${baseUrl}/api/users/${id}`);
  return id;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => {
          user._id !== action.payload.id;
        });
      });
  },
});

export default userSlice.reducer;

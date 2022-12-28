import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { baseURL } from '../../utils/fetch';
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from '../../utils/localStorage';

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk('user/registerUser', async (user, thunkAPI) => {
  try {
    const response = await fetch(`${baseURL}/tp/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    const data = response.json();

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const loginUser = createAsyncThunk('user/loginUser', async (user, thunkAPI) => {
  try {
    const response = await fetch(`${baseURL}/tp/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    const data = response.json();

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUser = createAsyncThunk('user/updateUser', async (user, thunkAPI) => {
  try {
    const response = await fetch(`${baseURL}/tp/user/${initialState.user.secret}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    const data = response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { data } = payload;
      state.isLoading = false;
      state.user = data.user;
      addUserToLocalStorage(data.user);
      toast.success(`Welcome, ${data.user?.name}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { data } = payload;
      state.isLoading = false;
      state.user = data.user;
      addUserToLocalStorage(data.user);
      toast.success(`Welcome Back, ${data.user.name}!`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const { data } = payload;
      console.log('data ===', data);
      state.isLoading = false;
      state.user = data.user;
      addUserToLocalStorage(data.user);
      toast.success(`Information Updated, ${data.user.name}!`);
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

console.log('initialState.user ===', initialState.user);
export const { toggleSidebar, logoutUser } = userSlice.actions;

export default userSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { baseURL } from '../../utils/fetch';

const initialFilterState = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState = {
  isLoading: false,
  notes: [],
  totalNotes: 0,
  pageAmount: 1,
  stats: {},
  ...initialFilterState,
};

export const getAllNotes = createAsyncThunk('/allNotes/getAllNotes', async (userId, thunkAPI) => {
  try {
    const response = await fetch(`${baseURL}/tp/notes/${userId}`);
    return await response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const allNotesSlice = createSlice({
  name: 'allNotes',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllNotes.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllNotes.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.notes = payload.data.notes;
    },
    [getAllNotes.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default allNotesSlice.reducer;
// export const { getAllNotes } = allNotesSlice.actions;

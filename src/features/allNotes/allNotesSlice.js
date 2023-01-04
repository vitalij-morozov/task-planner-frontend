import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { baseURL } from '../../utils/fetch';

const initialFilterState = {
  search: '',
  searchStatus: 'in-progress',
  searchType: 'note',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState = {
  isLoading: false,
  notes: [],
  totalNotes: 0,
  stats: {},
  ...initialFilterState,
};

export const getAllNotes = createAsyncThunk('/allNotes/getAllNotes', async (userId, thunkAPI) => {
  try {
    const { searchType, search, searchStatus, sort, page } = thunkAPI.getState().allNotes;
    console.log('search ===', search);
    let url = `${baseURL}/tp/notes/${userId}?noteType=${searchType}&noteStatus=${searchStatus}&sort=${sort}&page=${page}`;
    if (search) {
      url += `&search=${search}`;
    }
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const allNotesSlice = createSlice({
  name: 'allNotes',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    handleChange: (state, { payload: { name, value } }) => {
      state.page = 1;
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialState };
    },
    changePage: (state, { payload }) => {
      console.log('payload ===', payload);
      state.page = payload;
    },
  },
  extraReducers: {
    [getAllNotes.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllNotes.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.page = 1;
      state.notes = payload.data.notes;
      state.totalNotes = payload.data.noteAmount;
    },
    [getAllNotes.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { showLoading, hideLoading, handleChange, clearFilters, changePage } = allNotesSlice.actions;
export default allNotesSlice.reducer;

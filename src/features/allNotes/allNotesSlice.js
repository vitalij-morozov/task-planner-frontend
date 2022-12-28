import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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

const allNotesSlice = createSlice({
  name: 'allNotes',
  initialState,
  reducers: {},
});

export default allNotesSlice.reducer;

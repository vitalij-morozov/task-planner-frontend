import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getUserFromLocalStorage } from '../../utils/localStorage';

const initialState = {
  isLoading: false,
  noteTypeOptions: ['note', 'task'],
  noteType: 'note',
  noteText: '',
  dueDate: '',
  statusOptions: ['in-progress', 'completed', 'failed', 'expired'],
  status: 'in-progress',
};

const noteSlice = createSlice({
  name: 'note',
  initialState,
});

export default noteSlice.reducer;

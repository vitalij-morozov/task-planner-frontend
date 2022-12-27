import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getUserFromLocalStorage } from '../../utils/localStorage';

const initialState = {
  isLoading: false,
  noteTypeOptions: ['note', 'task'],
  noteType: 'note',
  noteTitle: '',
  noteText: '',
  dueDate: '',
  statusOptions: ['in-progress', 'completed', 'failed', 'expired'],
  status: 'in-progress',
  isEditing: false,
  userId: () => {
    const user = getUserFromLocalStorage();
    if (user) {
      return user._id;
    }
    return null;
  },
};

const noteSlice = createSlice({
  name: 'note',
  initialState,
});

export default noteSlice.reducer;

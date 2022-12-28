import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { baseURL } from '../../utils/fetch';

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
  userId: '',
};

export const createNote = createAsyncThunk('/note/createNote', async (note, thunkAPI) => {
  try {
    const response = await fetch(`${baseURL}/tp/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    });
    thunkAPI.dispatch(clearValues());
    return await response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: () => {
      return initialState;
    },
  },
  extraReducers: {
    [createNote.pending]: (state) => {
      state.isLoading = true;
    },
    [createNote.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success('New Note Created!');
    },
    [createNote.rejected]: (state) => {
      state.isLoading = false;
      toast.error('Failed to create Note');
    },
  },
});

export const { handleChange, clearValues } = noteSlice.actions;
export default noteSlice.reducer;

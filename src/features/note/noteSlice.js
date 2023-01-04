import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { baseURL } from '../../utils/fetch';
import { showLoading, hideLoading, getAllNotes } from '../allNotes/allNotesSlice';

const initialState = {
  isLoading: false,
  noteTypeOptions: ['note', 'task'],
  noteType: 'note',
  noteTitle: '',
  noteText: '',
  dueDate: '',
  statusOptions: ['in-progress', 'completed', 'failed'],
  status: 'in-progress',
  editId: '',
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

export const removeNote = createAsyncThunk('/note/removeNote', async (ids, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const response = await fetch(`${baseURL}/tp/notes/${ids.noteId}`, {
      method: 'DELETE',
    });
    thunkAPI.dispatch(getAllNotes(ids.userId));
    return await response.json();
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateNote = createAsyncThunk('/note/updateNote', async (updateData, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const response = await fetch(`${baseURL}/tp/notes/${updateData.noteId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData),
    });
    thunkAPI.dispatch(getAllNotes(updateData.userId));
    return await response.json();
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
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
    setNoteUpdate: (state, { payload }) => {
      return { ...state, ...payload };
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
    [removeNote.fulfilled]: (state, { payload }) => {
      toast.success('Note Removed', payload);
    },
    [removeNote.rejected]: (state, { payload }) => {
      toast.error('Note Removal Failed', payload);
    },
    [updateNote.pending]: (state) => {
      state.isLoading = true;
    },
    [updateNote.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success('Note Updated!');
    },
    [updateNote.rejected]: (state) => {
      state.isLoading = false;
      toast.error('Failed to create Note');
    },
  },
});

export const { handleChange, clearValues, setNoteUpdate } = noteSlice.actions;
export default noteSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import noteSlice from './features/note/noteSlice';
import userSlice from './features/user/userSlice';
import allNotesSlice from './features/allNotes/allNotesSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    note: noteSlice,
    allNotes: allNotesSlice,
  },
});

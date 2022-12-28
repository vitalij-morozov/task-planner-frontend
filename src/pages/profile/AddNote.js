import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Container from '../../assets/containers/AddNoteContainer';
import { FormRow, FormRowSelect } from '../../components';
import { handleChange, clearValues } from '../../features/note/noteSlice';
import { createNote } from '../../features/note/noteSlice';

function AddNote() {
  const { isLoading, noteTypeOptions, noteType, noteTitle, noteText, dueDate, statusOptions, status, isEditing } =
    useSelector((state) => state.note);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [text, setText] = useState(noteText);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!noteType || !noteTitle || !text || (noteType === 'task' && !dueDate) || (noteType === 'task' && !status)) {
      toast.error('Please fill out fields');
      return;
    }
    dispatch(
      createNote({
        noteType,
        noteTitle,
        noteText: text,
        dueDate,
        status,
        userId: user ? user._id : '',
        createdAt: Date.now(),
      })
    );
    setText('');
  };
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  return (
    <Container>
      <form className='form'>
        <h3>{isEditing ? 'edit note' : 'add note'}</h3>
        <div className='form-center'>
          <FormRowSelect
            name='noteType'
            labelText='note type'
            value={noteType}
            handleChange={handleInputs}
            list={noteTypeOptions}
          />
          <FormRow type='text' name='noteTitle' labelText='Title' value={noteTitle} handleChange={handleInputs} />
          <div className='form-row'>
            <label htmlFor='noteText' className='form-label'>
              Note Text
            </label>
            <textarea
              name='noteText'
              id='noteText'
              cols='30'
              rows='10'
              value={text}
              onChange={(e) => setText(e.target.value)}
              className='form-input textarea'
            ></textarea>
          </div>

          {noteType === 'task' && (
            <FormRow type='date' name='dueDate' labelText='Due Date' value={dueDate} handleChange={handleInputs} />
          )}

          {noteType === 'task' && (
            <FormRowSelect
              name='status'
              labelText='status'
              value={status}
              handleChange={handleInputs}
              list={statusOptions}
            />
          )}
          <div className='btn-container'>
            <button type='button' className='btn btn-block clear-btn' onClick={clearValues}>
              clear
            </button>
            <button type='submit' className='btn btn-block submit-btn' disabled={isLoading} onClick={handleSubmit}>
              submit
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
}

export default AddNote;

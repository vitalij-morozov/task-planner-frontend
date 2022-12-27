import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../assets/containers/AddNoteContainer';
import { FormRow } from '../../components';

function AddNote() {
  const [text, setText] = useState(``);

  const {
    isLoading,
    noteTypeOptions,
    noteType,
    noteTitle,
    noteText,
    dueDate,
    statusOptions,
    status,
    isEditing,
    userId,
  } = useSelector((state) => state.note);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const hadleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  };

  const uid = userId();
  console.log('uid ===', uid);
  const handleChange = () => {};
  console.log('text ===', text);
  return (
    <Container>
      <form className='form'>
        <h3>{isEditing ? 'edit note' : 'add note'}</h3>
        <div className='form-center'>
          <FormRow type='text' name='noteTitle' labelText='Title' value={noteTitle} handleChange={hadleInputs} />
          <div className='form-row'>
            <label htmlFor='noteText' className='form-label'>
              Note Text
            </label>
            <textarea
              name='noteText'
              id='noteText'
              cols='30'
              rows='10'
              value={noteText}
              onChange={(e) => setText(e.target.value)}
              className='form-input textarea'
            ></textarea>
          </div>

          <FormRow type='date' name='dueDate' labelText='Due Date' value={dueDate} handleChange={hadleInputs} />
          <div className='btn-container'>
            <button type='button' className='btn btn-block clear-btn'>
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

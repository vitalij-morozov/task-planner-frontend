import React from 'react';
import Container from '../assets/containers/EditFormContainer';
import { updateNote } from '../features/note/noteSlice';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function EditForm({ status, setShowEdit, id, title, text, type, uId }) {
  const titleRef = useRef();
  const textRef = useRef();
  const statusRef = useRef();

  const { statusOptions } = useSelector((store) => store.note);

  const dispatch = useDispatch();

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateNote({
        noteId: id,
        userId: uId,
        title: titleRef.current.value,
        text: textRef.current.value,
        status: type === 'task' ? statusRef.current.value : 'in-progress',
      })
    );
  };

  return (
    <Container
      className='edit-form'
      onSubmit={(e) => {
        handleUpdateSubmit(e);
        setShowEdit(false);
      }}
    >
      <div className='row'>
        <label htmlFor='title' className='form-label'>
          Note Title
        </label>
        <input type='text' name='title' ref={titleRef} defaultValue={title} />
      </div>
      <div className='row'>
        <label htmlFor='text' className='form-label'>
          Note Text
        </label>
        <textarea ref={textRef} name='text' id='edit-text' cols='30' rows='5' defaultValue={text}></textarea>
      </div>

      {type === 'task' && (
        <div className='row'>
          <label htmlFor='status' className='form-label'>
            Task Status
          </label>
          <select ref={statusRef} name='status' id='status-select' defaultValue={status}>
            {statusOptions.map((opt, idx) => {
              return (
                <option key={idx} value={opt}>
                  {opt}
                </option>
              );
            })}
          </select>
        </div>
      )}
      <div className='buttons'>
        <button type='submit' className='btn edit-btn confirm'>
          Confirm Changes
        </button>
        <button type='button' className='btn edit-btn cancel' onClick={() => setShowEdit(false)}>
          Cancel
        </button>
      </div>
    </Container>
  );
}

export default EditForm;

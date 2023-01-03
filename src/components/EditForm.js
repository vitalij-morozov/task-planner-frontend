import React from 'react';
import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';
import Container from '../assets/containers/EditFormContainer';
import { updateNote } from '../features/note/noteSlice';
import { useRef } from 'react';

function EditForm({ status, setShowEdit, id, title, text }) {

  const titleRef = useRef()
  const textRef = useRef()
  const statusRef = useRef()
 
  return (
    <Container className='edit-form'>
      {status === 'task' && <FormRowSelect />}
      <FormRow ref={titleRef} type='text' name='title' labelText='Note Title'/>
      <FormRow type='text' name='text' labelText={'Note Text'} />
      <FormRowSelect/>
      <div className='buttons'>
        <button type='submit' className='btn'>
          Confirm Changes
        </button>
        <button type='button' className='btn' onClick={() => setShowEdit(false)}>
          Cancel
        </button>
      </div>
    </Container>
  );
}

export default EditForm;

import React from 'react';
import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';
import Container from '../assets/containers/EditFormContainer';

function EditForm({ status, setShowEdit }) {
  return (
    <Container className='edit-form'>
      {status === 'task' && <FormRowSelect />}
      <FormRow type='text' name='title' />
      <FormRow type='text' name='' />
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

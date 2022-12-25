import { MainLogo } from '../components';
import Container from '../assets/containers/RegisterContainer';
import { useState } from 'react';
import { FormRow } from '../components';
const inialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

function RegisterPage() {
  const [values, setValues] = useState(inialState);

  const handleChange = (e) => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Container className='full-page'>
      <form onSubmit={handleSubmit} className='form'>
        <MainLogo />
        <h3>{!values.isMember ? 'Login' : 'Register'}</h3>
        {values.isMember && (
          <FormRow type='text' name='name' value={values.name} handleChange={handleChange} labelText='Name' />
        )}
        <FormRow type='email' name='email' value={values.email} handleChange={handleChange} labelText='Email' />
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
          labelText='Password'
        />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <p>
          {values.isMember ? 'Do not have an account yet?' : 'Already have an account?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Login' : 'Register'}
          </button>
        </p>
      </form>
    </Container>
  );
}

export default RegisterPage;

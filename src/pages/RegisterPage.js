import { MainLogo } from '../components';
import Container from '../assets/containers/RegisterContainer';
import { useEffect, useState } from 'react';
import { FormRow } from '../components';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const inialState = {
  name: '',
  email: '',
  password: '',
  password2: '',
  isMember: true,
};

function RegisterPage() {
  const [values, setValues] = useState(inialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        nav('/');
      }, 2500);
    }
  }, [user, nav]);

  const handleChange = (e) => {
    const name = e.target.value;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, password2, isMember } = values;
    if (!email || !password || !password2 || (!isMember && !name)) {
      toast.error('Please fill all fields');
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
    }
    dispatch(registerUser({ name, email: email, password: password, password2: password2, notes: [] }));
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
        {values.isMember && (
          <FormRow
            type='passwordtwo'
            name='passwordtwo'
            value={values.password}
            handleChange={handleChange}
            labelText='Repeat Password'
          />
        )}
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
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

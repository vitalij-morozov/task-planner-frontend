import React, { useState } from 'react';
import { FormRow } from '../../components';
import Container from '../../assets/containers/ProfilePageContainer';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';

function UserProfilePage() {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    image: user?.image || '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, image } = userInfo;
    if (!name || !email) {
      toast.error('Fill out necessary (*) fields');
      return;
    }
    console.log('userInfo ===', userInfo);
    dispatch(updateUser({ id: user.secret, name, email, lastName, image }));
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <Container>
      <form className='form' onSubmit={handleSubmit}>
        <h3>user profile</h3>
        <p className='form-subtitle'>
          Here you can change your Profile Information. Fields that are marked with * cannot be empty
        </p>
        <div className='form-center'>
          <FormRow type='text' labelText='name*' name='name' value={userInfo.name} handleChange={handleChange} />
          <FormRow type='text' labelText='email*' name='email' value={userInfo.email} handleChange={handleChange} />
          <FormRow
            type='text'
            name='lastName'
            labelText='Last Name'
            value={userInfo.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            labelText='profile picture'
            name='image'
            value={userInfo.image}
            handleChange={handleChange}
          />
          <button type='submit' className='btn btn-block' disabled={isLoading}>
            {isLoading ? 'Wait for changes...' : 'Save changes'}
          </button>
        </div>
      </form>
    </Container>
  );
}

export default UserProfilePage;

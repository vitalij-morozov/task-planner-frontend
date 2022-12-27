import React, { useState } from 'react';
import { FormRow } from '../../components';
import Container from '../../assets/containers/ProfilePageContainer';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

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
    if (!userInfo.name || !userInfo.email) {
      toast.error('Fill out necessary (*) fields');
      return;
    }
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
          <FormRow type='text' name='name' value={userInfo.name} handleChange={handleChange} />
          <FormRow
            type='text'
            name='lastName'
            labelText='Last Name'
            value={userInfo.lastName}
            handleChange={handleChange}
          />
          <FormRow type='text' name='email' value={userInfo.email} handleChange={handleChange} />
          <FormRow type='text' name='image' value={userInfo.image} handleChange={handleChange} />
        </div>
      </form>
    </Container>
  );
}

export default UserProfilePage;

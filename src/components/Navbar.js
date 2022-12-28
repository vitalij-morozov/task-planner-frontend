import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../assets/containers/NavbarContainer';
import MainLogo from './MainLogo';
import { toggleSidebar, logoutUser } from '../features/user/userSlice';
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  const logOut = () => {
    dispatch(logoutUser());
  };
  return (
    <Container>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggle}>
          <AiOutlineMenu />
        </button>
        <div>
          <MainLogo />
          <h3 className='logo-text'>
            {user?.image ? <img src={user.image} alt='profile avatar' className='user-avatar' /> : ''}
            <span>
              {user?.name} {user?.lastName}{' '}
            </span>{' '}
            Profile
          </h3>
        </div>
        <div className='btn-container'>
          <button type='button' className='btn' onClick={logOut}>
            Log Out
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;

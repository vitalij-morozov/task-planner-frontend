import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../assets/containers/NavbarContainer';
import MainLogo from './MainLogo';
import { toggleSidebar } from '../features/user/userSlice';

function Navbar() {
  const { user } = useSelector((store) => store.user);
  const disppatch = useDispatch();

  const toggle = () => {
    disppatch(toggleSidebar());
  };

  return (
    <Container>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggle}>
          Toggle
        </button>
        <div>
          <MainLogo />
          <h3 className='logo-text'>
            <span>{user?.name} </span> Profile
          </h3>
        </div>
        <div className='btn-container'>
          <button type='button' className='btn'>
            Log Out
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;

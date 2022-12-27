import React from 'react';
import Container from '../assets/containers/SidebarSmallContainer';
import MainLogo from './MainLogo';
import { toggleSidebar } from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import NavLinks from './NavLinks';

function SidebarSmall() {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Container>
      <div className={isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggle}>
            ToggleX
          </button>
          <header>
            <MainLogo />
          </header>
          <NavLinks toggle={toggle} />
        </div>
      </div>
    </Container>
  );
}

export default SidebarSmall;

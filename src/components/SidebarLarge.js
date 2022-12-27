import React from 'react';
import Container from '../assets/containers/SidebarLargeContainer';
import NavLinks from './NavLinks';
import MainLogo from './MainLogo';
import { useSelector } from 'react-redux';

function SidebarLarge() {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <Container>
      <div className={isSidebarOpen ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
        <div className='content'>
          <header>
            <MainLogo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Container>
  );
}

export default SidebarLarge;

import React from 'react';
import Container from '../../assets/containers/LayoutContainer';
import { Outlet } from 'react-router-dom';
import { Navbar, SidebarLarge, SidebarSmall } from '../../components';

function Layout() {
  return (
    <Container>
      <main className='profile'>
        <SidebarSmall />
        <SidebarLarge />
        <div>
          <Navbar />
          <div className='profile-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Container>
  );
}

export default Layout;

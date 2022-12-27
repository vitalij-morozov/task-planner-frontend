import React from 'react';
import { NavLink } from 'react-router-dom';
import links from '../utils/links';

function NavLinks({ toggle }) {
  return (
    <div className='nav-links'>
      {links.map(({ text, path, id, icon }) => (
        <NavLink
          to={path}
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          key={id}
          onClick={toggle}
        >
          <span className='icon'>{icon}</span>
          {text}
        </NavLink>
      ))}
    </div>
  );
}

export default NavLinks;

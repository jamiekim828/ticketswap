import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>
        <Link to='/'>
          <i className='navtitle' />
          TicketNara
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/events' className='navmenu'>
            Events
          </Link>
        </li>
        <li>
          <Link to='/register' className='navmenu'>
            Register
          </Link>
        </li>
        <li>
          <Link to='/login' className='navmenu'>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

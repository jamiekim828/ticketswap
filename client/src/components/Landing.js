import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <h1 className='x-large'>TicketNara</h1>
        <p className='lead'>
          You can create events, and also buy and sell tickets.
        </p>
        <div className='buttons'>
          <Link to='/register' className='btn btn-primary'>
            Sign Up
          </Link>
          <Link to='/login' className='btn btn-kight'>
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;

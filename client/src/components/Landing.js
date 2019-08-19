import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <h1 className='x-large'>Ticket Nara</h1>
        <p className='lead'>
          Create events and tickets to sell and also buy tickets where you wanna
          go.
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

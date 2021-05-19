import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className="myCard">
      <div className='card auth-card input-field' >
        <h2>Instagram</h2>
        <input type='text' name='email' id='email' placeholder='email' />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='password'
        />
        <button
          className='btn waves-effect waves-light blue lighten-2'
        >
          Sign in
        </button>
        <p>
          <Link to='/signup'>
          Don't have an account yet?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;


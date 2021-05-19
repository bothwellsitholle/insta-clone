import React from 'react';
import {Link} from 'react-router-dom';

const Signup = () => {
  return (
    <div className="myCard">
      <div className='card auth-card input-field' >
        <h2>Instagram</h2>
        <input type='text' name='name' id='name' placeholder='name' />
        <input type='text' name='email' id='email' placeholder='email' />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='password'
        />
        <button
          className='btn waves-effect waves-light blue darken-1'
        >
          Signup
        </button>
        <p>
          <Link to='/login'>
          Already have an account?
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup

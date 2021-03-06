import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../Controllers/Redux/authSlice';

import './Sidebar.css';

export default () => {
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);

  const signOut = () => {
    dispatch(signOut());
  }

  return (
    <div className="sidebar">
      <Link className='nav-link' to='/'>
        <h1 className='brand'>
          Bug-Tracker
        </h1>
      </Link>
      <ul>
        <li>
          <Link to='/' className='nav-link'>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to='/viewbugs' className='nav-link'>
            View Bugs
          </Link>
        </li>
        {
          auth.admin &&
          <li>
            <Link to='/createbug' className='nav-link'>
              Create Bug
            </Link>
          </li>
        }
      </ul>
      <button className='logout' onClick={signOut}>Logout</button>
    </div>
  )
}

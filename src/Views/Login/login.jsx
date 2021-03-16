import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../Controllers/Redux/authSlice';
import './login.css'

export default () => {
  const dispatch = useDispatch();

  const [formInput, setFormInput] = useState({
    name: '',
    password: '',
  })

  const handleInputChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(formInput));
  }

  return (
    <div className="loginBG">
      <form className="login-panel">
        <h1>Login:</h1>
        <input
          name="name"
          placeholder="Name"
          onChange={handleInputChange}
          value={formInput.name}
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleInputChange}
          value={formInput.password}
        />
        <button
          type="submit"
          onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  )
}

import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Views/Login/login';

function App() {
  const { auth } = useSelector(state => state)

  return (
    <>
      {!auth.LoggedIn ?
        <Login /> :
        <h1>YO</h1>}
    </>
  );
}

export default App;

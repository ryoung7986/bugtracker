import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Views/Login/login';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Views/Sidebar/Sidebar';
import ViewBugPage from './Views/Pages/ViewBugs';

function App() {
  const { auth } = useSelector(state => state)

  return (
    <Router>
      {
        !auth.LoggedIn ?
          <Login /> :
          <>
            <Sidebar />
            <ViewBugPage />
          </>
      }
    </Router>
  );
}

export default App;

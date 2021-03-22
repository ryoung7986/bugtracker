import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Views/Pages/Login/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
            <Switch>
              <Route path="/viewbugs">
                <ViewBugPage />
              </Route>
            </Switch>
          </>
      }
    </Router>
  );
}

export default App;

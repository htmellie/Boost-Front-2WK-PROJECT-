
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateEvent from "../CreateEvent";
import ProfilePage from "../ProfilePage";
import GroupFeed from "../GroupFeed";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "../LoginPage";
import NavBar from "../NavBar";
import './App.css';



function App() {
  // const { isAuthenticated } = useAuth0();
  const isAuthenticated = true;

  return (
    <Router>
      <Switch>
        <Route path="/CreateEvent">
          <CreateEvent />
        </Route>
        <Route path="/GroupFeed">
          <GroupFeed />
        </Route>
        <Route path="/">
          {isAuthenticated ? <ProfilePage /> : <LoginPage />}
        </Route>
      </Switch>

      {isAuthenticated && <NavBar />}
    </Router>
  );
}

export default App;

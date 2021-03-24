import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateEvent from "../CreateEvent";
import Profile from "../Profile";
import GroupFeed from "../GroupFeed";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../NavBar";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
      {!isAuthenticated && <LoginButton></LoginButton>}
      {isAuthenticated && (
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route path="/CreateEvent">
                <CreateEvent />
              </Route>
              <Route path="/GroupFeed">
                <GroupFeed />
              </Route>
              <Route path="/">
                <Profile
                  user={user}
                  isAuthenticated={isAuthenticated}
                  isLoading={isLoading}
                />
              </Route>
            </Switch>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateEvent from "../CreateEvent";
import Profile from "../Profile";
import GroupFeed from "../GroupFeed";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Profile</Link>
            </li>
            <li>
              <Link to="/CreateEvent">Create Event</Link>
            </li>
            <li>
              <Link to="/GroupFeed">Group Feed</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/CreateEvent">
            <CreateEvent />
          </Route>
          <Route path="/GroupFeed">
            <GroupFeed />
          </Route>
          <Route path="/">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Welcome from './Welcome';

const App = () =>
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/welcome">
          <Welcome name="Martiniano" />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  </Router>

export default App;

const Home = () =>
  <h2>Home</h2>;
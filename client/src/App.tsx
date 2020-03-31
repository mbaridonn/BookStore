import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Welcome from './Welcome';
import { Home } from './Home/Home';
import { Books } from './Books/Books';

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
          <li>
            <Link to="books">Books</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/books">
          <Books />
        </Route>
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
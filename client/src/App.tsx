import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Books } from "./Books/Books";
import { Book } from "./Books/Book";
import { SiteBar } from "./SiteBar/SiteBar";
import { Footer } from "./Footer/Footer";
import { AdminPanel } from "./AdminPanel/AdminPanel";

const App = () => (
  <div>
    <Router>
      <SiteBar />
      <Switch>
        <Route path="/adminpanel">
          <AdminPanel />
        </Route>
        <Route path="/books/:id">
          <Book />
        </Route>
        <Route path="/">
          <Books />
        </Route>
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default App;

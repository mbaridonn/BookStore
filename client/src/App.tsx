import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Books } from "./Books/Books";
import { NewBook } from "./Books/NewBook";
import { Book } from "./Books/Book";
import { SiteBar } from "./SiteBar/SiteBar";
import { Footer } from "./Footer/Footer";

const App = () => (
  <div>
    <Router>
      <SiteBar />
      <Switch>
        <Route path="/books/new">
          <NewBook />
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

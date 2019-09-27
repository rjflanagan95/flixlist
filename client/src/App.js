import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/nav/nav";
import Main from "./components/main/main";
import Movies from "./components/movies/movies";
import TV from "./components/TV/TV";

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/tv" component={TV} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

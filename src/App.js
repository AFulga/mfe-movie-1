import React from "react";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import Movie1 from "./Movie1";



function App({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/movie-1'> 
          <Movie1 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

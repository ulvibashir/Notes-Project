import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Header } from './commons'
import {
  Homepage,
  Create,
  Archive
} from './pages'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/create" component={Create} />
        <Route path="/archive" component={Archive} />
      </Switch>
    </Router>
  );
}

export default App;

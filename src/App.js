import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Header } from './commons'
import { Homepage } from './pages'
import { Create } from './pages'

function App() {
  return (
    <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/create" component={Create}/>
        </Switch>
    </Router>
  );
}

export default App;

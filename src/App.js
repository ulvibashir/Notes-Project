import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { SingleItemView } from './components'
import { Header } from './commons'
import { NotesContextProvider} from './context/notesContext';

import {
  Homepage,
  Create,
  Archive
} from './pages'

function App() {
  return (
    <Router>
      <NotesContextProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/create" component={Create} />
          <Route path="/archive" component={Archive} />
          <Route path="/notes/:id" component={SingleItemView}/>
        </Switch>
      </NotesContextProvider>
    </Router>
  );
}

export default App;

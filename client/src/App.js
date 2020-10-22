import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home'
import AddMed from './screens/AddMed'
import EditMed from './screens/EditMed'

function App() {

  return (
    <div className="App">
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/:id/add'>
        <AddMed />
      </Route>
      <Route path='/:id/edit/:medication_id'>
        <EditMed />
      </Route>
    </div>
  );
}

export default App;

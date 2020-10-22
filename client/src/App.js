import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home'
import AddMed from './screens/AddMed'

function App() {

  return (
    <div className="App">
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/:id/add'>
        <AddMed />
      </Route>
    </div>
  );
}

export default App;

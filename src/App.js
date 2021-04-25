import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Coaching from './Coaching';
import Programing from './Programing';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/About" component={About} />
      <Route path="/Coaching" component={Coaching} />
      <Route path="/Programing" component={Programing} />
    </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Coaching from './Coaching';
import Programing from './Programing';
import 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Coaching />
      <Programing />
    </div>
  );
}

export default App;

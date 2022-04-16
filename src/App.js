import React from "react";
import "./App.css";
import "./Home.css";
import Home from "./Home";
import Nav from "./Nav";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* <Switch> */}
<Route exact path="" component={Home} /> 

        {/* </Switch> */}
      </div>
      <Footer />
    </Router>
  );
}

export default App;

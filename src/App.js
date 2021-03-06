import React from "react";
import "./App.css";
import "./Home.css";
import Home from "./Home";
import Nav from "./Nav";
import About from "./About";
import Coaching from "./Coaching";
import Programing from "./Programing";
import Contact from "./Contact";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* <Switch> */}
          {/* <Route exact path="" component={Home} /> */}
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Coaching" component={Coaching} />
          <Route path="/Programing" component={Programing} />
        {/* </Switch> */}
      </div>
      <Footer />
    </Router>
  );
}

export default App;

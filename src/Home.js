import React from "react";
import About from "./About";
import Programing from "./Programing";
import Coaching from "./Coaching";
import Contact from "./Contact";
import "./App.css";
import "./Home.css";

function Home() {
  return <div className='home'>
            <About />
        <Programing />
        <Coaching />
    </div>;
}

export default Home;

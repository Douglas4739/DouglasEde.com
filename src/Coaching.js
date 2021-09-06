import React from "react";
import Carousel from "./Components/Carousel";
import "./App.css";
import "./Coaching.css";

function Coaching() {
  return (
    <div className="coaching">
      <h1 className="coachingTitle">Coaching</h1>
      <section className="coachingText">
        <p>
          I've been coaching individuals on the basics of fundamental analysis
          in regards to the stock market for 5 years. There's something to be
          gained for everyone in my 4 week coaching block. We'll start by
          getting a better idea of your goals for investing. How much do you
          plan to invest? How large can we grow your regular contributions?
          What's a good ratio for your personal portfolio? What style of investing (Growth, Dividend, Value) most suits your needs? Then we'll dip our
          toes into the world of fundamental analysis.{" "}
        </p>
        <h2>What you'll learn:</h2>
        <h3>General Investing</h3>
        <ul className="coachingList">
          <li>Dollar Cost Averaging</li>
          <li>Diversification</li>
          <li>ETF's (Exchange Traded Funds)</li>
        </ul>
      </section>
    </div>
  );
}

export default Coaching;

import React from "react";
import Carousel from "./Components/Carousel";
import "./App.css";
import "./Coaching.css";
import Contact from "./Contact";
import investing from './images/investing.png';
import quantitative from './images/quantitative.png';
import qualitative from './images/qualitative.png';

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
          What's a good ratio for your personal portfolio? What style of
          investing (Growth, Dividend, Value) most suits your needs? Then we'll
          dip our toes into the world of fundamental analysis.{" "}
        </p>
        <h2>What you'll learn:</h2>
        <div className='learning'>
        <img src={investing} alt="investing" class="fundamentalimg"/>
        <div>
        <h3>General Investing</h3>
        <ul className="coaching-list">
          <li>Dollar Cost Averaging</li>
          <li>Diversification</li>
          <li>ETF's (Exchange Traded Funds)</li>
        </ul>
        </div>
        </div>
        <div className='learning'>
        <img src={quantitative} alt="quantitative" class="fundamentalimg"/>
        <div>
        <h3>Quantitative Analysis</h3>
        <ul className='coaching-list'>
          <li>Assets</li>
          <li>Liabilities</li>
          <li>Revenue</li>
          <li>Earnings</li>
          <li>Cashflow</li>
          <li>PE Ratios</li>
        </ul>
        </div>
        </div>
        <div className='learning'>
        <img src={qualitative} alt="qualitative" class="fundamentalimg"/>
        <div>
        <h3>Qualitative Analysis</h3>
        <ul className='coaching-list'>
          <li>Macro Psychology</li>
          <li>Economic Moats</li>
          <li>Stewardship</li>
          <li>SWOT Table Analysis</li>
        </ul>
        </div>
        </div>
      </section>
      <hr />
      <Contact />
    </div>
  );
}

export default Coaching;

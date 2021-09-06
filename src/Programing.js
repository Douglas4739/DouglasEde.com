import React from "react";
import "./App.css";
import "./Programing.css";

function Programing() {
  return (
    <div className="programing">
      <h1>Technologies I Love:</h1>
      <div className="technologies">
        <img
          src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
          alt="HTML 5"
        />
        <img
          src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
          alt="CSS3"
        />
        <img
          src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
          alt="Javascript"
        />
        <br />
        <img
          src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
          alt="PostgreSQL"
        />
        <img
          src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"
          alt="Express"
        />
        <img
          src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
          alt="React"
        />
        <img
          src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
          alt="Node.js"
        />
        <br />
        <img
          src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"
          alt="Styled Components"
        />
        <img
          src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"
          alt="Netlify"
        />
        <img
          src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"
          alt="Heroku"
        />
        <img
          src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"
          alt="Visual Studio Code"
        />
      </div>
      <div className="Projects">
        <h1>My Projects:</h1>
        <p>Click on a project image to take you to the live deployment.</p>
        <h2>Production/Calculator App</h2>
        <a href="https://democlient.vercel.app/AppSelect">
          <img src="appsuite.jpg" alt="app suite" />
        </a>
        <p>
          This project is a suite of applications for Concretti, an artisanal
          concrete production company. The applications included in this suite
          are the following: (1)Material Calculator and (2)Production/Inventory
          Tracker. Material Calculator overview: This application is to be a
          product material calculator that allows the user to (1) select the
          color and (2)select the products to be manufactured in said color.
          When the user has made all of their selections, (3) the application
          will display the required materials for production of those products.
          Production/Inventory Tracker overview: This application is to be a
          production and inventory tracker. When a user engages with the
          application, they must be able to: (1) Manually enter orders by color
          and product. (2) Set priority on individual products. This process may
          be initiated manually of automatically, depending on the following
          production condition: (a) If a particular product that is already in
          production is not completed in a predetermined amount of time, the
          status of the product becomes a priority. (3) See that all orders
          entered are given an In Production status. (4) See the status changed
          to Produced when a product tagged with In Production status is
          produced. (5) See the status changed to In Stock when a product tagged
          with Produced is moved into the shipping and packing area and
          packaging is completed.
          <br />
          **Link is a DEMO only. Please contact me to see the full application.
        </p>
        <br />
        <h2>Quiz app</h2>
        <a href="https://douglas4739.github.io/Quiz-App/">
          <img src="codingquiz.jpg" alt="quiz" />
        </a>
        <p>
          A simple 5 question quiz app built with: jQuery, JavaScript, HTML and
          CSS
        </p>
        <br />
        <h2>Bookmark app</h2>
        <a href="https://douglas4739.github.io/Bookmark-App/">
          <img src="Bookmarks.jpg" alt="bookmarks" />
        </a>
        <p>
          CRUD functional app that allows users to save bookmarks to their
          favorite websites with ratings descriptions and filter results by
          rating. Built with jQuery, JavaScript, HTML and CSS.
        </p>
      </div>
    </div>
  );
}

export default Programing;

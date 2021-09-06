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

        <a href="https://douglas4739.github.io/Quiz-App/">
          <img src="codingquiz.jpg" alt="quiz" />
        </a>
        <p>
          A simple 5 question quiz app built with: jQuery, JavaScript, HTML and
          CSS
        </p>
      </div>
    </div>
  );
}

export default Programing;

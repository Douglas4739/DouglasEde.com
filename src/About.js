import React from "react";
import "./App.css";

function About() {
  return (
    <div className="about">
      <div className="profileImage">
        <img src="douglasede.jpg" height="285" width="245" alt="Douglas Ede" />
        <h2>Investor/Software Engineer </h2>
        <section className="aboutText">
          Hi, welcome to my website. I am a veteran stock market investor that
          has branched out into the world of software engineering. I have a real
          passion for education about investing and would like to work with
          anyone that wants to learn the world of securities trading. I use my
          free time to develop websites, study market charts, and read. If you
          would like to know more about my professional experience, and technical
          skills, please take a look at my
          <a href="https://www.linkedin.com/in/douglasede-webdev"> LinkedIn.</a>
        </section>
      </div>
      <div>
        <hr />

        <section className="resume">
          <h1>Resume</h1>
          <a href="https://docs.google.com/document/d/1mahwZMrSbL89ux1Ix986jgIE4pIl_imuUB1sXCt4i2I/edit?usp=sharing">
            <img
              src="iconfinder_portfolio-business_and_finance-personal_profile-resume-interface_4288584.png"
              height="200"
              width="200"
              alt="Resume"
            />
          </a>
          <p>
            I am a Software Engineer proficient in JavaScript, HTML, and CSS.
            Certified in UX/UI Design and Development. I've built and
            contributed to PERN* Full-stack Applications.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;

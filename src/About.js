import React from "react";
import "./App.css";

function About() {
  return (
    <div className="about">
      <div className="profileImage">
        <img src="mountainman.jpg" height="285" width="245" alt="Douglas Ede" />
        <h2>Investor/Software Engineer </h2>
        <section className="aboutText">
          Hi, welcome to my website. I am a veteran stock market investor that
          has branched out into the world of software engineering. I have a real
          passion for education about investing and would like to work with
          anyone that wants to learn the world of securities trading. I use my
          free time to develop websites, study market charts, and read. If you
          would like to know more about my professional expirience and technical
          skills, please take a look at my
          <a href="https://www.linkedin.com/in/douglasede-webdev"> LinkedIn.</a>
        </section>
      </div>
      <div>
        <br />

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
            Proficient in JavaScript, HTML, and CSS. I have 5 years of
            experience as a salvage auto inspector, which gave me a keen eye for
            attention to detail along with making me comfortable with long hours
            and hard work. I also have a strong interest in Ecommerce, having
            launched a small but successful business in the field.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;

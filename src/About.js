import React from "react";
import "./App.css";

function About() {
  return (
    <div className="about">
      <div className="profileImage">
        <img src="mountainman.jpg" height="285" width="245" alt="Douglas Ede" />
        <h2>Investor/Software Engineer </h2>
      </div>
      <div>
        <br />
        <section className="aboutText">
          Hi, welcome to my website. I am a veteran stock market investor that
          has branched out into the world of software engineering. I have a real
          passion for education about investing and would like to work with
          anyone that wants to learn the world of securities trading. I use my
          free time to develop websites, study market charts, and read (132
          books and counting!) If you would like to know more about my
          professional expirience and technical skills, please take a look at my
          <a href="https://www.linkedin.com/in/douglasede-webdev"> LinkedIn.</a>
        </section>
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
          <p>Proficient in JavaScript, HTML, and CSS. I have 5 years of experience as a salvage auto inspector, which gave me a keen eye for attention to detail along with making me comfortable with long hours and hard work. I also have a strong interest in Ecommerce, having launched a small but successful business in the field.</p>
        </section>
        <a href="mailto: briancarter340@gmail.com">
          <img
            src="iconfinder_google-gmail_7089163.png"
            height="100"
            width="100"
            alt="Email"
          />
        </a>
        <a href="https://www.instagram.com/doug_dynasty4739/">
          <img
            src="iconfinder_1_Instagram_colored_svg_1_5296765 (1).png"
            height="100"
            width="100"
            alt="Instagram"
          />
        </a>
        <a href="https://discord.com/channels/773219768899207188/773219768899207191">
          <img
            src="iconfinder_91_Discord_logo_logos_4373196.png"
            height="100"
            width="100"
            alt="DIscord"
          />
        </a>
        <a href="https://github.com/Douglas4739">
          <img
            src="iconfinder_github-square-social-media_764894.png"
            height="100"
            width="100"
            alt="GitHub"
          />
        </a>
        <a href="https://gitlab.com/Douglas4739">
          <img
            src="iconfinder_144_Gitlab_logo_logos_4373151.png"
            height="100"
            width="100"
            alt="GitLab"
          />
        </a>
        <a href="https://www.linkedin.com/in/douglasede-webdev/">
          <img
            src="iconfinder_1_Linkedin_unofficial_colored_svg_5296501 (1).png"
            height="100"
            width="100"
            alt="LinkedIn"
          />
        </a>
      </div>
    </div>
  );
}

export default About;

import React from 'react';
import './App.css';

function About() {
  return (
<div className='about'>
      <div className='profileImage'>
        <img
          src="mountainman.jpg"
          height="285"
          width="245"
          alt="Douglas Ede"
        />
        <h2>Investor/Software Engineer </h2>
      </div>
      <div>
        <br />
        <section className='aboutText'>
          Hi, welcome to my website. I am a veteran stock market investor that
          has branched out into the world of software engineering. I have a real
          passion for education about investing and would like to work with
          anyone that wants to learn the world of securities trading. I use my
          free time to develop websites, study market charts, and read (132
          books and counting!) If you would like to know more about my
          professional expirience and technical skills, please take a look at my
          <a href='https://www.linkedin.com/in/douglasede-webdev'> LinkedIn.</a>
        </section>
        <section className='resume'>
          <a href='https://docs.google.com/document/d/1mahwZMrSbL89ux1Ix986jgIE4pIl_imuUB1sXCt4i2I/edit?usp=sharing'>Resume</a> 
        </section>
         To get in contact wit me you can use my <a href = 'mailto: briancarter340@gmail.com'>Email</a>
            {/*
            Here I need to add styled links to LinkedIn, InstaGram, GitHub, GitLab, and Discord.
            */}
        <section>
        </section>

      </div>
    </div>
  );
}

export default About;
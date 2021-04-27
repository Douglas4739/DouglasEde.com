import React from 'react';
import './App.css';
import './Home.css';

function Home() {
  return (
    <div>
      <div>
        <img
          src="mountainman.jpg"
          height="285"
          width="245"
          alt="Douglas Ede"
        />
      </div>
      <div>
        <section>
          <h2>Investor/Software Engineer </h2>
        </section>
        <br />
        <section>
          Hi, welcome to my website. I am a veteran stock market investor that
          has branched out into the world of software engineering. I have a real
          passion for education about investing and would like to work with
          anyone that wants to learn the world of securities trading. I use my
          free time to develop websites, study market charts, and read (132
          books and counting!) If you would like to know more about my
          professional expirience and technical skills, please take a look at my
          <a href='https://www.linkedin.com/in/douglasede-webdev'> LinkedIn.</a>
        </section>
        <section
          target="_blank"
          rel="noopener noreferrer"
          underline="always"
          color="inherit"
        >
          Resume
        </section>
        . To get in contact wit me you can use{" "}
        <section
          href="https://www.linkedin.com/in/jonathan-m-martinez"
          target="_blank"
          rel="noopener noreferrer"
          underline="always"
          color="inherit"
        >
          LinkedIn{" "}
        </section>
        or send me an{" "}
        <section
          // component="a"
          href={`mailto:${"jmmartinez331@gmail.com"}`}
          target="_blank"
          rel="noopener noreferrer"
          underline="always"
          color="inherit"
        >
          Email
        </section>
        . I also have a{" "}
      </div>
    </div>
  );
}

export default Home;
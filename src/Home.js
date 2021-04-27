import React from 'react';
import './App.css';
import './Home.css';

function Home() {
  return (
<div>
      <div>
        <img src='logo192.png' height="285" width="245" alt="Jonathan Profile" />
      </div>
      <div>
        <section>
          <h2>Stock Market Investor/Software Engineer{" "}</h2>
        </section>
        <br />
        <section>
          Hi, welcome to my profile webpage. I am an electrical engineer with
          strong software development skills. I am looking into a new role as a
          Software Engineer. I am passioned about technology and would like to
          obtain an opportunity as a Software Developer with a great company
          that promotes team work, and professional growth. I use my free time
          to develop websites or learn new programming skills. If you would line
          to know more about my professional expirience and technical skills,
          please take a look at my{" "}
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
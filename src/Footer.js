import React from "react";
import "./App.css";
import email from './images/iconfinder_google-gmail_7089163.png';
import linkedIn from './images/iconfinder_1_Linkedin_unofficial_colored_svg_5296501 (1).png';
import discord from './images/iconfinder_91_Discord_logo_logos_4373196.png';
import gitHub from './images/iconfinder_github-square-social-media_764894.png';
import gitLab from './images/iconfinder_144_Gitlab_logo_logos_4373151.png';
import instagram from './images/iconfinder_1_Instagram_colored_svg_1_5296765 (1).png';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col1">
            <h5>Connect</h5> 
            <ul className='contactf'>
              <li>
                {" "}
                <a href="mailto: briancarter340@gmail.com">
                  <img
                    src={email}
                    height="50"
                    width="50"
                    alt="Email"
                  />
                </a>{" "}
                Gmail
              </li>
              <li>
                {" "}
                <a href="https://www.linkedin.com/in/douglasede-webdev/">
                  <img
                    src={linkedIn}
                    height="50"
                    width="50"
                    alt="LinkedIn"
                  />
                </a>{" "}
                LinkedIn
              </li>
            </ul>
          </div>
          <div className="col2">
            <h5>Comunity</h5>
            <ul className='contactf'>
              <li>
                {" "}
                <a href="https://discord.com/channels/818180464711041035/818180464711041038">
                  <img
                    src={discord}
                    height="50"
                    width="50"
                    alt="DIscord"
                  />
                </a>{" "}
                Discord
              </li>
              <li>
                {" "}
                <a href="https://github.com/Douglas4739">
                  <img
                    src={gitHub}
                    height="50"
                    width="50"
                    alt="GitHub"
                  />
                </a>{" "}
                GitHub
              </li>
              <li>
                {" "}
                <a href="https://gitlab.com/Douglas4739">
                  <img
                    src={gitLab}
                    height="50"
                    width="50"
                    alt="GitLab"
                  />
                </a>{" "}
                GitLab
              </li>
            </ul>
          </div>
          <div className="col3">
            <h5>Social</h5>
            <ul className='contactf'>
              <li>
                {" "}
                <a href="https://www.instagram.com/doug_dynasty4739/">
                  <img
                    src={instagram}
                    height="50"
                    width="50"
                    alt="Instagram"
                  />
                </a>{" "}
                Instagram
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

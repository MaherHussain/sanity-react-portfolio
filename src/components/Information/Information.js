import React from 'react'
import './information.css'
import myImage from '../../assest/myfoto.jpg'
import cv from '../../assest/Cv-Engilsh.pdf'
import * as TiIcons from "react-icons/ti";
export default function Information() {
  const date = new Date();
  const year = date.getFullYear()
    return (
      
      <div>
        <div className="infoCont">
          <div className="imgInfo">
            <img src={myImage} alt="Maher" />
          </div>

          <div className="name text-center">Maher Hussain</div>

          <div className="jobTitle text-center">fullstack web developer</div>

          <div className="media">
            <a
              href="https://github.com/Maherhussain"
              target="_blank"
              rel="noreferrer"
            >
              <TiIcons.TiSocialGithub />
            </a>
            <a
              href="https://www.facebook.com/maher.husen.9"
              target="_blank"
              rel="noreferrer"
            >
              <TiIcons.TiSocialFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/maher-hussain/"
              target="_blank"
              rel="noreferrer"
            >
              <TiIcons.TiSocialLinkedin />
            </a>
          </div>

          <div className="donloawdCv">
            <a href={cv} rel="noreferrer" target="_blank">
              <span>Download CV</span>
            </a>
          </div>
          <div className="copyright">&copy; {year} All rights reserved.</div>
        </div>
      </div>
    );
}


import React from 'react'
import './SmallInfo.css'
import myImage from '../../assest/myfoto.jpg'
import cv from "../../assest/Cv-Engilsh.pdf";
import * as TiIcons from "react-icons/ti";
const date = new Date();
const year = date.getFullYear();
export default function InformationSsmall() {
    return (
      <div class="info-page">
        <div className="s-info">
          <div className="imgInfo animate__animated animate__fadeInDownBig">
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
            <a href={cv} target="_blank" rel="noreferrer">
              <span>Download CV</span>
            </a>
          </div>
          <div className="copyright">&copy; {year} All rights reserved.</div>
        </div>
      </div>
    );
}

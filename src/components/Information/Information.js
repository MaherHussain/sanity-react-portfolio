import React from 'react'
import './information.css'

import myImage from '../../assest/myfoto.jpg'
import cv from '../../assest/Cv-Engilsh.new.pdf'
import * as TiIcons from "react-icons/ti";

export default function Information() {
  const date = new Date();
  const year = date.getFullYear()
    return (
      <div className="container-fluid  m-0 ">
        <div className="row ">
          <div className="col-lg-4 col-md-12 m-0 p-0">
            <div className="infoCont">
              <div className="My-image">
                <img src={myImage} alt={myImage} />
              </div>
              <div className="shadow"> </div>
              <div className="info">
                <h2>Maher Hussain</h2>
                <h3>Frontend web developer </h3>
                <div className="media">
                  <a
                    href="https://github.com/Maherhussain"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TiIcons.TiSocialGithub />
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
              </div>
              <div className="copyright">
                &copy; {year} All rights reserved.
              </div>
            </div>
          </div>
          <div className="col-lg-8   d-none d-lg-block  m-0 p-0">
            <div className="content-div">
              <div className="text-wrap">
                <p className="animate__animated  animate__backInLeft ">
                  Hello I am{" "}
                </p>
                <h2 className="animate__animated  animate__backInRight animate__delay-2s">
                  Maher Hussain
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

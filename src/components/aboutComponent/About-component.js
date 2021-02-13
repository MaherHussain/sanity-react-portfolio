import React from 'react';
import './AboutStyle.css'
import aboutImage from "./aboutImage.jpg";


function About() {
    
    return (
      <div className="container pt-4 ">
        <h2 className="about-head ">
          About
          <span className="hello  ">M</span>e
        </h2>

        <div className="row ">
          <div className="col-lg-4 col-md-12 pl-0 pr-0">
            <div className="about-image animate__animated animate__backInLeft">
              <img src={aboutImage} alt="about-image" />
            </div>
          </div>
          <div className="col-lg-8 col-md-12 pl-0 pr-0">
            <div className="about-text animate__animated animate__backInRight">
              <p>
                <span className="hello ">H</span>
                ello........ My name is Maher Hussain. I am originally from
                Syria and settled in Denmark. I am an energetic and imaginative
                web developer who is able to work independently as well as
                alongside other developers in creating websites of the very
                highest standards. I can and like building websites using the
                newest technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About

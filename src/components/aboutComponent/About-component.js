import React from 'react';
import './AboutStyle.css'

import aboutImage from "./home-office-381229.jpg";


function About() {
    
    return (
     
        

        <div className="">
          <div className="container pt-4 ">
            <h2 className="about-head ">
              About
              <span className="hello  ">M</span>e
            </h2>

            <div className="row about">
              <div className="col-lg-6 col-md-12 pl-0 pr-0">
                <div className="about-image">
                  <img src={aboutImage} alt="aboutMe" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 pl-0 pr-0">
                <div className="about-text ">
                  <p className="animate__animated animate__backInRight">
                    <span>H</span>
                    ello........ My name is Maher Hussain. I am originally from
                    Syria and settled in Denmark. I am an energetic and
                    imaginative web developer who is able to work independently
                    as well as alongside other developers in creating websites
                    of the very highest standards. I can and like building
                    websites using the newest technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    );
}

export default About

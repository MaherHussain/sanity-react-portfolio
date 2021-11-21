import React from 'react';
import Particles from "react-particles-js";
import ContactImage from "../assest/contactMe.jpg" 
import '../App.css'


export default function Contact() {
    return (
      <div className="contact-page">
        <Particles
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 6,
                  color: "#218c74",
                },
              },
            },
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h2 className="title">Keep in touch</h2>
              <p>
                Ready to start your next project with me? Send me an email and I
                will get back to you as soon as possible!
              </p>
              <div className="email animate__animated animate__fadeInLeft">
                <a href="mailto:maherhussain6@gmail.com" className="">
                  maherhussain6@gmail.com
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <div className="contactImage ">
                <img src={ContactImage} alt="contact me" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

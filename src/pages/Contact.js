import React from 'react';
import ContactImage from "../assest/contactMe.jpg" 
import '../App.css'


export default function Contact() {
    return (
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 ">
              <div className="contact-text">
                <h2>Keep in touch</h2>
                <p>
                  Ready to start your next project with me? send me an email and
                  I will get back to you as soon as possible!
                </p>
                <a href="mailto:maherhussain6@gmail.com">
                  maherhussain6@gmail.com
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="contactImage">
                <img src={ContactImage} alt="contact me" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

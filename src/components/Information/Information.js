import React from 'react'
import './information.css'
import myImage from '../../assest/myfoto.jpg'
import * as TiIcons from "react-icons/ti";
export default function Information() {
    return (
      <div>
        <div className="infoCont">
          
           
              <div className="imgInfo">
                <img src={myImage} alt="main image" />
              </div>
            
            
              <div className="name text-center">Maher Hussain</div>
            
            
              <div className="jobTitle text-center">fullstack web developer</div>
            
            
              <div className="media">
                <a href="#">
                  <TiIcons.TiSocialGithub />
                </a>
                <a href="#">
                  <TiIcons.TiSocialFacebook />
                </a>
                <a href="#">
                  <TiIcons.TiSocialLinkedin />
                </a>
              
            </div>

            <div className="donloawdCv ">
              <a href="#">
                <span >Download CV</span>
              </a>
            </div>
            <div className="copyright">&copy; 2020 All rights reserved.</div>
          </div>
        
      </div>
    );
}


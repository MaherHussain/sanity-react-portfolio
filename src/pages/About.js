import React from 'react'
import Particles from "react-particles-js";
import AboutText from '../components/aboutComponent/About-component'


function About() {
    return (
      <div className="about-page">
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
        <AboutText />
      </div>
    );
}

export default About

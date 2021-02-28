import React  from 'react'
import Particles from "react-particles-js";
import Categories from '../components/project-component/Categories'

function Portfolio() {
    return (
      <div className="projects-page">
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
        <Categories />
      </div>
    );
}

export default Portfolio


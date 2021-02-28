import React from 'react'
import '../App.css'
import Particles from "react-particles-js";
import Information from '../components/Information/Information'


export default function Home() {
    return (
      <div className="info-page">
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
        <Information />
      </div>
    ); 
}

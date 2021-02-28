import React from 'react'
import Particles from "react-particles-js";
import SkillsComponent from '../components/skills/Skill'

export default function Skills() {
    return (
      <div className="skills-page">
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
        <SkillsComponent />
      </div>
    );
}

import React, {useState,useEffect} from 'react'
import sanityClient from '../../client'
import { SyncLoader } from "react-spinners";
import './skill.style.css'
function Skill() {
    const [skillData, setSkillData] = useState(null);

    useEffect(() => {
      sanityClient
        .fetch(
          `*[_type == 'skills']{
        skill_name,
        
        skillImage { 
          asset-> {
            _id,
            url,
          },
          alt,

        }
          
        
      }`
        )
        .then((data) => setSkillData(data))
        .catch(console.error);
    }, []);
    return (
      <div className="container">
        <h2 className="title">
          <span className="hello">M</span>y skills
        </h2>
        {!skillData ? (
          <div className="loader">
            <SyncLoader color="#fff" />
          </div>
        ) : (
          <div className="skills">
            <div className="row">
              {skillData &&
                skillData.map((skill) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-10 "
                    key={skill.skill_name}
                  >
                    <div className="skill-item animate__animated animate__bounce">
                      <div className="skill-image">
                        <img
                          src={skill.skillImage.asset.url}
                          alt={skill.skill_name}
                        />
                      </div>
                      <div className="skill-name">
                        <h3>{skill.skill_name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    );
}

export default Skill
 
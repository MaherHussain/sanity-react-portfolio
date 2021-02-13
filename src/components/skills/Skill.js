import React, {useState,useEffect} from 'react'
import sanityClient from '../../client'
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
      <div className="container pl-0 pr-0">
        <div className="row ">
          {skillData &&
            skillData.map((skill) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                <div className="skill-con container">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 -col-sm-12">
                      <div className="skill-image">
                        <img
                          src={skill.skillImage.asset.url}
                          alt={skill.skillImage.alt}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 -col-sm-12">
                      <h3>{skill.skill_name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
}

export default Skill

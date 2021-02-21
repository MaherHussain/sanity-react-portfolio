import React from 'react'
import './project-style.css'

function Projects({title,projectLink,projectImage}) {
    return (
      <div className="img-wrap animate__animated animate__fadeInUp">
        <figure className="snip1321">
          <img src={projectImage} alt={title} />
          <div className="overlay">
            <figcaption>
              <h3>{title}</h3>
              <a href={projectLink} target="_blank" rel="noreferrer">
                view project
              </a>
            </figcaption>
          </div>
        </figure>
        {/* <div className="img-wrap">
          <img src={projectImage} alt={title} />
          <div className="overlay">
            <h3>{title}</h3>
            <a href={projectLink} target="_blank" rel="noreferrer">
              {" "}
              see project
            </a>
          </div>
        </div> */}
      </div>
    );
}

export default Projects

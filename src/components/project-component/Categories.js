import React, { useState, useEffect } from "react";

import Project from './Projects'
import {SyncLoader} from 'react-spinners'

import './project-style.css'
import sanityClient from "../../client.js";

export default function Categories() {
    const [categoryValue,setCategoryValue] = useState({
      category: "all",
    }); 
    
    const [categories, setCategories] = useState(null)
    const [projects, setProjects] = useState(null);
    
    const OnChangeHandler = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      
      setCategoryValue({
        ...categoryValue,
        [name] : value

      })
    }
     useEffect(() => {
       sanityClient
         .fetch(
           `*[_type == "category"]{
            title,
            _id,
               
        }`
         )
         .then((data) => setCategories(data))
         .catch(console.error);
     }, []); 
     
    useEffect (() => {
        sanityClient
          .fetch(
            `*[ _type == "project"]{
            project_title,
            project_link,
            project_image{
                 asset-> {
                    _id,
                    url,
                    },
                        alt,
                },
                "category" : category->{
                    _id,
                    title,
                }

               
        }`
          )
          .then((data) => setProjects(data))
          .catch(console.error);
    },[]) 
    
    return (
      <div className="container">
        <h2 className="title">
          {" "}
          <span className="hello ">M</span>y Projects
        </h2>
        <div className="isotope-wrapper">
          <div className="categories">
            <div className="row">
              <div className="col-12">
                <form className="isotope-toolbar">
                  <label>
                    <input
                      type="radio"
                      value="all"
                      name="category"
                      onChange={OnChangeHandler}
                      checked={categoryValue.category === "all"}
                    />
                    <span>all</span>
                  </label>
                  {categories &&
                    categories.map((category) => (
                      <label key={category.title}>
                        <input
                          type="radio"
                          value={category.title}
                          name="category"
                          onChange={OnChangeHandler}
                          checked={categoryValue.category === category.title}
                        />
                        <span>{category.title}</span>
                      </label>
                    ))}
                </form>
              </div>
            </div>
          </div>
          {!projects ? (
            <div className="loader">
              <SyncLoader color="#fff" />
            </div>
          ) : (
            <div className="projects">
              <div class="isotope-box row">
                {categoryValue.category === "all"
                  ? projects &&
                    projects.map((project) => (
                      <div
                        className="col-lg-4 col-md-6 col-sm-12"
                        key={project.project_title}
                      >
                        <div className="isotope-item hovereffect">
                          <Project
                            title={project.project_title}
                            projectLink={project.project_link}
                            projectImage={project.project_image.asset.url}
                          />
                        </div>
                      </div>
                    ))
                  : projects
                      .filter(
                        (item) => item.category.title === categoryValue.category
                      )
                      .map((project) => (
                        <div
                          className="col-lg-4 col-md-6 col-sm-12"
                          key={project.project_title}
                        >
                          <div className="isotope-item hovereffect">
                            <Project
                              title={project.project_title}
                              projectLink={project.project_link}
                              projectImage={project.project_image.asset.url}
                            />
                          </div>
                        </div>
                      ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

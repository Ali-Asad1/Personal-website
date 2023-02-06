import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ProjectBox from "../../Components/ProjectBox/ProjectBox";

import "./Projects.css";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <div className='projects-page'>
      <div className='projects-section'>
        <SectionTitle title='My Projects' />
        <div className='projects-container'>
          {projects.map((item) => (
            <ProjectBox title={item.title} subTitle={item.subTitle} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

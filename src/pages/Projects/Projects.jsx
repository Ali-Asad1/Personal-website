import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ProjectBox from "../../Components/ProjectBox/ProjectBox";
import "./Projects.css";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      className='projects-page'
      initial={{
        y: "20%",
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: "20%",
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}>
      <div className='projects-section'>
        <SectionTitle title='My Projects' />
        <div className='projects-container'>
          {projects.map((item) => (
            <ProjectBox title={item.title} subTitle={item.subTitle} image={item.image} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

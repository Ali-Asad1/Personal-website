import { motion } from "framer-motion";
import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import "./ProjectBox.css";
export default function ProjectBox({ title, subTitle, image }) {
  return (
    <motion.div
      className='project-box'
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}>
      <a href='#'>
        <div className='project-image'>
          <div className='project-image__overlay'>
            <BsLink45Deg />
          </div>
          <img src={`./images/${image}`} alt='' />
        </div>
        <div className='project-description'>
          <span className='project-description__title'>{title}</span>
          <span className='project-description__sub-title'>{subTitle}</span>
        </div>
      </a>
    </motion.div>
  );
}
ProjectBox.defaultProps = {
  image: "no_images_available.jpg",
};

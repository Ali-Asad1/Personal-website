import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import "./ProjectBox.css";

export default function ProjectBox({ title, subTitle, image }) {
  return (
    <div className='project-box'>
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
    </div>
  );
}
ProjectBox.defaultProps = {
  image : 'no_images_available.jpg'
}
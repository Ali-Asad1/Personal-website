import React, { useState } from "react";
import CircleIcon from "../../Components/CircleIcon/CircleIcon";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import CompanyItem from "../../Components/CompanyItem/CompanyItem";
import RadialBar from "../../Components/RadialBar/RadialBar";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import { skills } from "../../data/skills";
import { MdSchool } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { education as educationData } from "../../data/personalData";
import "./Resume.css";
import SkillTools from "../../Components/SkillTools/SkillTools";

export default function Resume() {
  const [education, setEducation] = useState([...educationData]);
  return (
    <div className='resume-page animate__animated animate__fadeInUp'>
      <div className='history-section'>
        <SectionTitle title='My Resume' />
        <div className='columns-container'>
          <div className='page-column'>
            <CircleIcon lable='Education' borderLine={true}>
              <MdSchool />
            </CircleIcon>
            {education.map((item) => (
              <CompanyItem
                title={item.degree}
                name={item.school}
                city={item.city}
                desc={item.description}
                dates={item.date}
                image={item.logo}
              />
            ))}
          </div>
          <div className='page-column'>
            <CircleIcon lable='Employment-history' borderLine={true}>
              <BsFillBriefcaseFill />
            </CircleIcon>
          </div>
        </div>
      </div>
      <div className='skills-section'>
        <SectionTitle title='My Skills' />
        <div className='columns-container'>
          <div className='page-column'>
            <CircleIcon lable='Coding' borderLine={true}>
              <BiCodeAlt />
            </CircleIcon>
            <div className='radial-box'>
              {skills.coding.map((item) => (
                <RadialBar serie={item.percent} label={item.label} />
              ))}
            </div>
          </div>
          <div className='page-column'>
            <CircleIcon lable='Front-End' borderLine={true}>
              <FaReact />
            </CircleIcon>
            <div className='progress-box'>
              {skills.frontEnd.map((item) => (
                <ProgressBar percent={item.percent} label={item.label}>
                  {item.icon}
                </ProgressBar>
              ))}
            </div>
          </div>
          <div className='page-column'>
            <CircleIcon lable='Back-End' borderLine={true}>
              <FaNodeJs />
            </CircleIcon>
            <div className='progress-box'>
              {skills.backEnd.map((item) => (
                <ProgressBar percent={item.percent} label={item.label}>
                  {item.icon}
                </ProgressBar>
              ))}
            </div>
          </div>
          <div className='page-column'>
            <CircleIcon lable='Back-End' borderLine={true}>
              <FaNodeJs />
            </CircleIcon>
            <div className='tools-box'>
              {skills.tools.map((item) => (
                <SkillTools label={item.label}>{item.icon}</SkillTools>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

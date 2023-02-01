import React, { useState } from "react";
import CircleIcon from "../../Components/CircleIcon/CircleIcon";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import CompanyItem from "../../Components/CompanyItem/CompanyItem";
import { MdSchool } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { education as educationData } from "../../data/personalData";
import "./Resume.css";

export default function Resume() {
  const [education, setEducation] = useState([...educationData]);
  return (
    <div className='resume-page animate__animated animate__fadeInUp'>
      <div className='history-section'>
        <SectionTitle title='My Resume' />
        <div className='histories'>
          <div className='history-column'>
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
          <div className='history-column'>
            <CircleIcon lable='Employment-history' borderLine={true}>
              <BsFillBriefcaseFill />
            </CircleIcon>
          </div>
        </div>
      </div>
    </div>
  );
}

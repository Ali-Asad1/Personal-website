import React, { useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ServiceItem from "../../Components/ServiceItem/ServiceItem";
import "./AboutMe.css";
import { services } from "../../data/servicesData";
export default function AboutMe() {
  const [servicesData, setServicesData] = useState(services);
  return (
    <div className='about-page animate__animated animate__fadeInUp'>
      <div className='about-section '>
        <SectionTitle title='About Me' />
        <h3>Hello i'm Ali</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aliquid magni
          perferendis. Repudiandae, quae ad maiores nostrum nesciunt assumenda quam repellendus
          provident reprehenderit officia quasi quia, quis, itaque dolor ut.
        </p>
        <div className='about-person'>
          <h4>
            <span>Age :</span>
            19
          </h4>
          <h4>
            <span>Address :</span>
            Shahre-kord
          </h4>
          <h4>
            <span>Expertise :</span>
            Front-end Developer
          </h4>
          <h4>
            <span>Workplace type :</span>
            remote
          </h4>
        </div>
      </div>
      <div className='services-section'>
        <SectionTitle title='My Services' />
        <div className='services'>
          {servicesData.map((item) => (
            <ServiceItem title={item.title} desc={item.desc} icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

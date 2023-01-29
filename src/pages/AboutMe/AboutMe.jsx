import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className='about-section animate__animated animate__fadeInDown'>
      <SectionTitle title='About Me' />
      <h3>Hello i'm Ali</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aliquid magni
        perferendis. Repudiandae, quae ad maiores nostrum nesciunt assumenda quam repellendus
        provident reprehenderit officia quasi quia, quis, itaque dolor ut.
      </p>
      <div className="about-person">
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
  );
}

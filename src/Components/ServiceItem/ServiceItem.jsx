import React from "react";
import CircleIcon from "../CircleIcon/CircleIcon";
import "./ServiceItem.css"

export default function ServiceItem({title, desc, icon , border}) {
  return (
    <div className='services-box'>
      <CircleIcon lable={title} borderLine={border}>
        {icon}
      </CircleIcon>
      <p className='service-description'>
        {desc}
      </p>
    </div>
  );
}

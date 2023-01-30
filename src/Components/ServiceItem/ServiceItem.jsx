import React from "react";
import CircleIcon from "../CircleIcon/CircleIcon";
import "./ServiceItem.css"

export default function ServiceItem({title, desc, icon}) {
  return (
    <div className='services-box'>
      <CircleIcon>
        {icon}
      </CircleIcon>
      <h3 className='service-title'>{title}</h3>
      <p className='service-description'>
        {desc}
      </p>
    </div>
  );
}

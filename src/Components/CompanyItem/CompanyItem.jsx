import React from "react";
import DateLabel from "../DateLable/DateLabel";

import "./CompanyItem.css";

export default function CompanyItem({ title, name, city, desc, image, dates }) {
  return (
    <div className='company-item'>
      <div className='company-information'>
        <DateLabel {...dates} />
        <div className='company-header'>
          <div className='company-header__left'>
            <span className='company-title'>{title}</span>
            <span className='company-name'>
              {name} - {city}
            </span>
          </div>
          {image && <img src={image} alt='company-logo' className='company-logo' />}
        </div>
        <div className='company-description'>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./CircleIcon.css";

export default function CircleIcon({ lable, borderLine, children }) {
  return (
    <div className='icon-container'>
      <div className='icon'>{children}</div>
      <h4 className='icon-label'>{lable}</h4>
      {borderLine && <div className='icon-border__bototm'></div>}
    </div>
  );
}

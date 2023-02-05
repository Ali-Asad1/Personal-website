import React from "react";
import "./SkillTools.css";

export default function SkillTools({label, children}) {
  return (
    <div className='tool'>
      <span className='tool-icon'>
        {children}
      </span>
      <span className='tool-label'>{label}</span>
    </div>
  );
}

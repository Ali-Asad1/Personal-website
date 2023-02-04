import React from "react";
import "./ProgressBar.css";

export default function ProgressBar({ label, percent, children }) {
  return (
    <div className='progress'>
      <div className='progress-label'>
        <span className='progress-title'>{label}</span>
        <span className='progress-icon'>{children}</span>
      </div>
      <div className='progress-container'>
        <div className='progress-line' style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}

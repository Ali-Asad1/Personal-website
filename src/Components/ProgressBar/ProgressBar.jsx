import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

export default function ProgressBar({ label, percent, children }) {
  const [percentAge, setPercentAge] = useState(0);
  useEffect(() => {
    setPercentAge(percent)
  }, []);
  return (
    <div className='progress'>
      <div className='progress-label'>
        <span className='progress-title'>{label}</span>
        <span className='progress-icon'>{children}</span>
        <span className='progress-percent'>{percentAge}%</span>
      </div>
      <div className='progress-container'>
        <div className='progress-line' style={{ width: `${percentAge}%` }}></div>
      </div>
    </div>
  );
}

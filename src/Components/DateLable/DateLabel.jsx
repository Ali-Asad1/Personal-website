import React from "react";
import "./DateLabel.css";

export default function DateLabel({ startYear, startMonth, endYear, endMonth, isPresent }) {
  const dateElem = isPresent ? (
    <span className='date-label'>{`${startMonth} ${startYear} - Present`}</span>
  ) : (
    <span className='date-label'>{`${startMonth} ${startYear} - ${endMonth} ${endYear}`}</span>
  );

  return <div className={`date ${isPresent ? "active" : "inActive"}`}>{dateElem}</div>;
}

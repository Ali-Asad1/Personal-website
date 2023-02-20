import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

export default function ProgressBar({ label, percent, children }) {
  const [percentAge, setPercentAge] = useState(0);

  return (
    <motion.div
      className='progress'
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        setTimeout(() => {
          setPercentAge(percent);
        }, 500);
      }}>
      <div className='progress-label'>
        <span className='progress-title'>{label}</span>
        <span className='progress-icon'>{children}</span>
        <span className='progress-percent'>{percentAge}%</span>
      </div>
      <div className='progress-container'>
        <div className='progress-line' style={{ width: `${percentAge}%` }}></div>
      </div>
    </motion.div>
  );
}

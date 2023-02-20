import { motion } from "framer-motion";
import React from "react";
import CircleIcon from "../CircleIcon/CircleIcon";
import "./ServiceItem.css";
export default function ServiceItem({ title, desc, icon, border }) {
  return (
    <motion.div
      className='services-box'
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}>
      <CircleIcon lable={title} borderLine={border}>
        {icon}
      </CircleIcon>
      <p className='service-description'>{desc}</p>
    </motion.div>
  );
}

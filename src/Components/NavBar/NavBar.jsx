import React from "react";
import { BsPerson, BsFileCode } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { AiOutlinePhone } from "react-icons/ai";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavBar() {
  const navMotion = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 2,
        opacity: { delay: 2.1 },
        delayChildren: 2.1,
        staggerChildren: 0.5,
      },
    },

    hidden: {
      opacity: 0,
      x: "100%",
    },
  };

  const itemMotion = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },

    hidden: {
      opacity: 0,
      scale: 0,
    },
  };
  return (
    <motion.nav className='navbar' variants={navMotion} initial='hidden' animate='visible'>
      <ul className='navbar-list'>
        <motion.li className='navbar-list-item' key={0} variants={itemMotion}>
          <NavLink
            to='/'
            className='navbar-list-link'
            style={({ isActive }) => (isActive ? { color: "var(--primary-main)" } : { color: "" })}>
            <BsPerson size={25} />
            about me
          </NavLink>
        </motion.li>
        <motion.li className='navbar-list-item' key={1} variants={itemMotion}>
          <NavLink
            to='/resume'
            className='navbar-list-link'
            style={({ isActive }) => (isActive ? { color: "var(--primary-main)" } : { color: "" })}>
            <RiPagesLine size={25} />
            resume
          </NavLink>
        </motion.li>
        <motion.li className='navbar-list-item' key={2} variants={itemMotion}>
          <NavLink
            to='/projects'
            className='navbar-list-link'
            style={({ isActive }) => (isActive ? { color: "var(--primary-main)" } : { color: "" })}>
            <BsFileCode size={25} />
            project
          </NavLink>
        </motion.li>
        <motion.li className='navbar-list-item' key={3} variants={itemMotion}>
          <NavLink
            to='/contact'
            className='navbar-list-link'
            style={({ isActive }) => (isActive ? { color: "var(--primary-main)" } : { color: "" })}>
            <AiOutlinePhone size={25} />
            contact me
          </NavLink>
        </motion.li>
      </ul>
    </motion.nav>
  );
}

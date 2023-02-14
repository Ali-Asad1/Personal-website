import React from "react";
import { BsPerson, BsFileCode } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { AiOutlinePhone } from "react-icons/ai";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-list-item'>
          <NavLink
            to='/'
            className='navbar-list-link'
            style={({ isActive }) =>
              isActive ? { color: "var(--primary-main)" } : { color: "#fff" }
            }>
            <BsPerson size={25} />
            about me
          </NavLink>
        </li>
        <li className='navbar-list-item'>
          <NavLink
            to='/resume'
            className='navbar-list-link'
            style={({ isActive }) =>
              isActive ? { color: "var(--primary-main)" } : { color: "#fff" }
            }>
            <RiPagesLine size={25} />
            resume
          </NavLink>
        </li>
        <li className='navbar-list-item'>
          <NavLink
            to='/projects'
            className='navbar-list-link'
            style={({ isActive }) =>
              isActive ? { color: "var(--primary-main)" } : { color: "#fff" }
            }>
            <BsFileCode size={25} />
            project
          </NavLink>
        </li>
        <li className='navbar-list-item'>
          <NavLink
            to='/contact'
            className='navbar-list-link'
            style={({ isActive }) =>
              isActive ? { color: "var(--primary-main)" } : { color: "#fff" }
            }>
            <AiOutlinePhone size={25} />
            contact me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

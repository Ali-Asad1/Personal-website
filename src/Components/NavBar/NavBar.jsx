import React from "react";
import { BsPerson, BsFileCode } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { AiOutlinePhone } from "react-icons/ai";
import "./NavBar.css";
import "animate.css";

export default function NavBar() {
  return (
    <nav className='navbar animate__animated animate__fadeInRight animate__delay-1s '>
      <ul className='navbar-list'>
        <li className='navbar-list-item'>
          <a className='navbar-list-link active' href='#'>
            <BsPerson size={25} />
            about me
          </a>
        </li>
        <li className='navbar-list-item'>
          <a className='navbar-list-link' href='#'>
            <RiPagesLine size={25} />
            resume
          </a>
        </li>
        <li className='navbar-list-item'>
          <a className='navbar-list-link' href='#'>
            <BsFileCode size={25} />
            project
          </a>
        </li>
        <li className='navbar-list-item'>
          <a className='navbar-list-link' href='#'>
            <AiOutlinePhone size={25} />
            contact me
          </a>
        </li>
      </ul>
    </nav>
  );
}

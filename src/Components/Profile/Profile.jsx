import React from "react";
import "./Profile.css";

import { BsWhatsapp, BsTelegram, BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdPaperPlane } from "react-icons/io";
import Typewriter from "typewriter-effect";

export default function Profile() {
  return (
    <div className='profile'>
      <div className='profile-image'>
        <img src='./images/slide-image-1.jpg' alt='image' />
      </div>
      <div className='profile-content'>
        <div className='profile-avatar'>
          <img src='./images/profile-avatar.png' alt='avatar' />
        </div>
        <h2 className='profile-name'>Ali Asad</h2>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Front-End Developer")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Web Developer")
              .pauseFor(2000)
              .start();
          }}
          options={{
            wrapperClassName: "profile-subtitle",
            cursorClassName: "typewriter-cursor",
            loop: true,
          }}
        />
        <div className='profile-social'>
          <a href='https://wa.me/989103931258'>
            <BsWhatsapp className='profile-social__icon' target='_blank' />
          </a>
          <a href='https://t.me/aliasad01'>
            <BsTelegram className='profile-social__icon' target='_blank' />
          </a>
          <a href='https://www.linkedin.com/in/ali-asad-a77290232'>
            <BsLinkedin className='profile-social__icon' target='_blank' />
          </a>
          <a href='https://instagram.com/aliasad_001?igshid=YzgyMTM2MGM=' target='_blank'>
            <BsInstagram className='profile-social__icon' />
          </a>
          <a href='https://github.com/MrAli001' target='_blank'>
            <BsGithub className='profile-social__icon' />
          </a>
        </div>
        <div className='profile-btns'>
          <button className='profile-btn profile-btn-dl'>
            download resume
            <MdOutlineFileDownload style={{transition : 'transform .3s'}} size={22} className='profile-btn__icon' />
          </button>
          <button className='profile-btn profile-btn-contact'>
            contact me
            <IoMdPaperPlane style={{transition : 'transform .3s'}} size={18} className='profile-btn__icon' />
          </button>
        </div>
      </div>
    </div>
  );
}

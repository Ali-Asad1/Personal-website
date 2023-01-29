import React from "react";
import Typewriter from "typewriter-effect";

import "./SectionTitle.css";

export default function SectionTitle({ title }) {
  return (
    <div className='sectionTitle'>
      <h2 className='title'>
        <Typewriter
          onInit={(typewriter) => {
              typewriter
              .pauseFor(2000)
              .typeString(title)
              .start();
          }}
          options={{
            wrapperClassName: "profile-subtitle",
            cursorClassName: "typewriter-cursor",
            loop: false,
          }}
        />
      </h2>
    </div>
  );
}

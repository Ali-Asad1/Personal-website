import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import { useLocation, useRoutes } from "react-router-dom";
import { routes } from "./router/routes";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const router = useRoutes(routes);
  const location = useLocation();
  const pageMotion = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 2,
        opacity: { delay: 2.1 },
      },
    },

    hidden: {
      opacity: 0,
      x: "-20%",
    },
  };
  return (
    <div className='main'>
      <div className='main-container'>
        <motion.div
          className='page-container'
          variants={pageMotion}
          initial='hidden'
          animate='visible'>
          <AnimatePresence mode='wait'>
            {React.cloneElement(router, { key: location.pathname })}
          </AnimatePresence>
        </motion.div>
        <Profile />
        <NavBar />
      </div>
    </div>
  );
}

import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";

export default function App() {
  return (
    <div className='main'>
      <div className='main-container'>
        <Profile />
        <NavBar />
      </div>
    </div>
  );
}

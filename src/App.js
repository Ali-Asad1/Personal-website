import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import { useRoutes } from "react-router-dom";
import { routes } from "./router/routes";

export default function App() {
  const router = useRoutes(routes);
  return (
    <div className='main'>
      <div className='main-container'>
        <div className='page-container'>
          {router}
        </div>
        <Profile />
        <NavBar />
      </div>
    </div>
  );
}

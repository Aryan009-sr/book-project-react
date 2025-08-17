// This is what App.jsx should look like if it's the main layout
import React, { useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import userContext from "../public/utils/userContext";

function App() {
const [userName, setUserName] = useState("Aryan singh Rajput");

  return (
    <>
      <div className="Header">
        <h1>Book Management App</h1>
        <ul className="nav-ul">
          <li><Link to="/">Home</Link></li>
           <userContext.Provider value={{loggedInUser:userName, setUserName}}>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Demo">Demo</Link></li>
          </userContext.Provider>
        </ul>
      </div>
      {/* <userContext.Provider value={{loggedInUser:userName, setUserName}}> */}
        <main className="app-body">
        <Outlet />
      </main>
      
    </>
  );
}

export default App;
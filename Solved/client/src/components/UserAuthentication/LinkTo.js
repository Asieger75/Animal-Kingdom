import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (

    

    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/user.js" className={location.pathname === "/Login" ? "nav-link active" : "nav-link"}>
          Log-In! 
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Logout"
          className={location.pathname === "/Logout" ? "nav-link active" : "nav-link"}
        >
          Log Out!
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/SignUp"
          className={location.pathname === "/SignUp" ? "nav-link active" : "nav-link"}
        >
          Sign Up!
        </Link>
      </li>
    </ul>

  );
}

export default NavTabs;
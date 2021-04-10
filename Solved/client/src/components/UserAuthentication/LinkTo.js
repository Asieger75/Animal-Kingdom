import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

function NavTabs() {
  const location = useLocation();
  const { loginWithRedirect, logout, isAuthenticated} = useAuth0();

        <button onClick={() => loginWithRedirect()}>
          Log In!
        </button>

  return (

    

    <ul className="nav nav-tabs">
        {!isAuthenticated && 
      <li className="nav-item">
      <button onClick={() => loginWithRedirect()}>
          Log In!
        </button>
      </li>
        }
        { isAuthenticated &&
      <li className="nav-item">
      <button onClick={() => logout()}>
          Log out!
        </button>
      </li>
        }
      {/*{ <li className="nav-item">
        <Link
          to="/SignUp"
          className={location.pathname === "/SignUp" ? "nav-link active" : "nav-link"}
        >
          Sign Up!
        </Link> */}
      {/* </li> */}
    </ul>

  );
}

export default NavTabs;
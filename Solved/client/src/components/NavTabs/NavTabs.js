import React from "react";
import { Link, useLocation } from "react-router-dom";
import './NavTabs.css';
import background from "./header.jpg";

function NavTabs() {
  const location = useLocation();

  return (

    <div className= "data">
    <title>Animal Kingdom</title>
    <header class="jumbotron">
    <div style={{
       backgroundImage: `url(${background})`,
       height: '300px',
       width: '100%'
       }}>
      <h1 class="display-3" style={{fontFamily: "Courier New",  fontSize: "50px"}}>Welcome to the Animal Kingdom </h1>
        <p class="lead" style={{fontFamily: "Courier New"}}>Learn all about animals in their corresponding continents</p>
      <p1 id="currentDay" class="leads"></p1>
      </div>
    </header>
  <br></br>

    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link 
        style={{fontFamily: "Courier New",  textDecoration: "underline"}}
        to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={{fontFamily: "Courier New",  textDecoration: "underline"}}
          to="/Africa"
          className={location.pathname === "/Africa" ? "nav-link active" : "nav-link"}
        >
          Africa!
        </Link>
      </li>
      <li className="nav-item">
        <Link
         style={{fontFamily: "Courier New",  textDecoration: "underline"}}
          to="/Antartica"
          className={location.pathname === "/Antartica" ? "nav-link active" : "nav-link"}
        >
          Antartica!
        </Link>
      </li>
      <li className="nav-item">
        <Link
         style={{fontFamily: "Courier New",  textDecoration: "underline"}}
          to="/Australia"
          className={location.pathname === "/Australia" ? "nav-link active" : "nav-link"}
        >
          Australia!
        </Link>
      </li>
      <li className="nav-item">
        <Link
         style={{fontFamily: "Courier New",  textDecoration: "underline"}}
          to="/Europe"
          className={location.pathname === "/Europe" ? "nav-link active" : "nav-link"}
        >
          Europe!
        </Link>
      </li>
      <li className="nav-item">
        <Link
         style={{fontFamily: "Courier New",  textDecoration: "underline"}}
          to="/NorthAmerica"
          className={location.pathname === "/NorthAmerica" ? "nav-link active" : "nav-link"}
        >
          North America!
        </Link>
      </li>
      <li className="nav-item">
        <Link
         style={{fontFamily: "Courier New",  textDecoration: "underline"}}
          to="/Oceana"
          className={location.pathname === "/Oceana" ? "nav-link active" : "nav-link"}
        >
          Oceana!
        </Link>
      </li>
      <li className="nav-item">
        <Link
         style={{fontFamily: "Courier New",  textDecoration: "underline"}}
          to="/SouthAmerica"
          className={location.pathname === "/SouthAmerica" ? "nav-link active" : "nav-link"}
        >
          South America!
        </Link>
      </li>
      <li className="nav-item">
        <Link
         style={{fontFamily: "Courier New",  textDecoration: "underline"}}
          to="/Asia"
          className={location.pathname === "/Asia" ? "nav-link active" : "nav-link"}
        >
          Asia !
        </Link>
      </li>
    </ul>

    </div>
  );
}

export default NavTabs;
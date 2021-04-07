import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (

    <div className= "data">
    <title>Animal Kingdom</title>
    <header class="jumbotron">
      <h1 class="display-3">Welcome to the Animal Kingdom! </h1>
        <p class="lead">Learn all about animals in their coresponding continents!</p>
      <p1 id="currentDay" class="leads"></p1>
    </header>
  <br></br>

    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="../Map/Africa/Africa"
          className={location.pathname === "/Africa" ? "nav-link active" : "nav-link"}
        >
          Africa!
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="../Map/Antartica/Antartica"
          className={location.pathname === "/Antartica" ? "nav-link active" : "nav-link"}
        >
          Antartica!
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="../Map/Australia"
          className={location.pathname === "/Australia" ? "nav-link active" : "nav-link"}
        >
          Australia!
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="../Map/Europe/Europe"
          className={location.pathname === "/Europe" ? "nav-link active" : "nav-link"}
        >
          Europe!
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="../Map/NorthAmerica/NorthAmerica"
          className={location.pathname === "/NorthAmerica" ? "nav-link active" : "nav-link"}
        >
          North America!
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="../Map/Oceana/Oceana"
          className={location.pathname === "/Oceana" ? "nav-link active" : "nav-link"}
        >
          Oceana!
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="../Map/SouthAmerica/SouthAmerica"
          className={location.pathname === "/SouthAmerica" ? "nav-link active" : "nav-link"}
        >
          South America!
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="../Map/Asia/Asia"
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
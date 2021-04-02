import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Continents.css";

function Continent() {
  return (
    <div class="data">
      <title>Animal Kingdom</title>
      <header class="jumbotron">
        <h1 class="display-3">Welcome to the Animal Kingdom! </h1>
        <p class="lead">
          learn all about animals in their cooresponding continents!
        </p>
        <p1 id="currentDay" class="leads"></p1>
      </header>
      <br></br>
    </div>
  );
}
export default Continent;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Continents.css";
import Asia from"../Map/Asia/Asia"
import Australia from"../Map/Australia/Australia"
import Europe from"../Map/Europe/Europe"
import Antartica from"../Map/Antartica/Antartica"
import Oceania from"../Map/Oceania/Oceania"
import NorthAmerica from"../Map/NorthAmerica/NorthAmerica"
import SouthAmerica from"../Map/SouthAmerica/SouthAmerica"
import Africa from"../Map/Africa/Africa"
function Continent() {
  return (
    <div class="data">
      <title>Animal Kingdom</title>
      <header class="jumbotron">
        <h1 class="display-3">Welcome to the Animal Kingdom! </h1>
        <p class="lead">
          Learn all about animals in their corresponding continents!!
        </p>
        <p1 id="currentDay" class="leads"></p1>
      </header>
      <br></br>
      <Asia animals = {[]}></Asia>
      <Australia></Australia>
      <Europe></Europe>
      <Antartica></Antartica>
      <Oceania></Oceania>
      <NorthAmerica></NorthAmerica>
      <SouthAmerica></SouthAmerica>
      <Africa></Africa>


    </div>
  );
}
export default Continent;

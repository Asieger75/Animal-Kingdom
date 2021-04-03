import React from "react";
import "./animals.css";
//import animalSeed from 



function animals() {

    CardList.propTypes = {
        animalSeed: React.PropTypes.array.isRequired
      };

    const CardList = ({ animalSeed }) => {
        const cardsArray = animalSeed.map(animalSeed => (
            <p>
            name={animalSeed.name}
            type={animalSeed.type}
            synopsis={animalSeed.synopsis} 
            continent={animalSeed.continent} 
            </p>
        ));
      
        return (
          <div>
            {cardsArray}
          </div>
        );
      };
}
export default animals;

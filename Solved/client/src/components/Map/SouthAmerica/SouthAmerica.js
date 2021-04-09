import React, { Component } from 'react';
class SouthAmerica extends Component {
    render() {
        let filteredAnimals = this.props.animals.filter(Animal=>{
            if(Animal.continent==="SouthAmerica") {
            return true 
            }
            else {
            return false
            }
        })
        
        return <div>{filteredAnimals}</div>
    }
}
export default SouthAmerica
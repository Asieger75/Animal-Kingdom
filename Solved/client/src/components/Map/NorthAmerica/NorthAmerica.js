import React, { Component } from 'react';
class NorthAmerica extends Component {
    render() {
        let filteredAnimals = this.props.animals.filter(Animal=>{
            if(Animal.continent==="NorthAmerica") {
            return true 
            }
            else {
            return false
            }
        })
        
        return <div>{filteredAnimals}</div>
    }
}
export default NorthAmerica

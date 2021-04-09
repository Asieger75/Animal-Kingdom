import React, { Component } from 'react';
class Europe extends Component {
    render() {
        let filteredAnimals = this.props.animals.filter(Animal=>{
            if(Animal.continent==="Europe") {
            return true 
            }
            else {
            return false
            }
        })
        
        return <div>{filteredAnimals}</div>
    }
}
export default Europe
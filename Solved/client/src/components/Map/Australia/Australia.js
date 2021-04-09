import React, { Component } from 'react';
class Australia extends Component {
    render() {
        let filteredAnimals = this.props.animals.filter(Animal=>{
            if(Animal.continent==="Australia") {
            return true 
            }
            else {
            return false
            }
        })
        
        return <div>{filteredAnimals}</div>
    }
}
export default Australia
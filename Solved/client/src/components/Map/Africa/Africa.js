import React, { Component } from 'react';
class Africa extends Component {
    render() {
        let filteredAnimals = this.props.animals.filter(Animal=>{
            if(Animal.continent==="Africa") {
            return true 
            }
            else {
            return false
            }
        })

        
        return <div>{filteredAnimals}</div>,
        <p>hello!</p>
    }
}
export default Africa
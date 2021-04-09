import React, { Component } from 'react';
class Antartica extends Component {
    render() {
        let filteredAnimals = this.props.animals.filter(Animal=>{
            if(Animal.continent==="Antartica") {
            return true 
            }
            else {
            return false
            }
        })
        
        return <div>{filteredAnimals}</div>
    }
}
export default Antartica
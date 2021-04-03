import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Continents.css"
//function Continents(){

  class Continents extends React.Component {
    state = {
      query: "",
      data: [],
      filteredData: []
    };
  
    handleInputChange = event => {
      const query = event.target.value;
  
      this.setState(prevState => {
        const filteredData = prevState.data.filter(element => {
          return element.name.toLowerCase().includes(query.toLowerCase());
        });
  
        return {
          query,
          filteredData
        };
      });
    }; 
  
    getData = () => {
      fetch(`http://localhost:3000/Animal-Kingdom`)
        .then(response => response.json())
        .then(data => {
          const { query } = this.state;
          const filteredData = data.filter(element => {
            return element.name.toLowerCase().includes(query.toLowerCase());
          });
        });
      };
    
      componentWillMount() {
        this.getData();
      }
    
      render() {
        return (
          <div class= "data">

            <title>Animal Kingdom</title>
              <header class="jumbotron">
                <h1 class="display-3">Welcome to the Animal Kingdom! </h1>
                  <p class="lead">learn all about animals in their cooresponding continents!</p>
                <p1 id="currentDay" class="leads"></p1>
              </header>
            <br></br>

            <div className="searchForm">
              <form>
                <input
                  placeholder="Search for..."
                  value={this.state.query}
                  onChange={this.handleInputChange}
                />
              </form>
            <div>{this.state.filteredData.map(i => <p>{i.name}</p>)}</div>
          </div>
        </div>
        );
      }
    }
// }
export default Continents;
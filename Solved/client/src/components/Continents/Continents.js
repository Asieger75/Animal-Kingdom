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

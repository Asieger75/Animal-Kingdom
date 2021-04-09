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

    getData = () => {
      fetch(`http://localhost:3000/api/animals`)
        .then(response => response.json())
        .then(data => {
          const { query } = this.state;
          this.setState({
            data,
            filteredData: data
            });

          // const filteredData = data.filter(element => {
          //   return element.name.toLowerCase().includes(query.toLowerCase());
          // });
        });
      };
    
      componentWillMount() {
        this.getData();
      }
  
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


    filteredData = (posts) => {
  
      if (!posts.length) return null;
      
      return posts.map((post, index) => (
        <div key={index} className="animal-display">
          <h3>{post.name}</h3>
            <p>{post.type}</p>
          <p>{post.synopsis}</p>
          <p>{post.continent}</p> 
          <hr></hr>
        </div>
      ));
    };
  
  
   
    
      render() {
        return (
          <div class= "data">
            <br></br>
            <h> Search for your favorite animal below!</h>
            <br></br>
            <br></br>
             
            <div className="searchForm">
              {/* <form> */}
                <input
                  placeholder="Search for..."
                  value={this.state.query}
                  onChange={this.handleInputChange}
                />
              {/* </form> */}
              <br></br>
            {/* <div>{this.state.filteredData.map(i => <p>{i.name}</p>)}</div> */}
          </div>
          <div className= "animals">
              {this.filteredData(this.state.filteredData)}
            </div>
        </div>
        );
      }
    }
// }
export default Continents;

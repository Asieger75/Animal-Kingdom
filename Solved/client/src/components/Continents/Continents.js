import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Continents.css"
import Africa from '../Map/Africa/Africa';
import Antartica from '../Map/Antartica/Antartica';
import Asia from '../Map/Asia/Asia';
import Australia from '../Map/Australia/Australia';
import Europe from '../Map/Europe/Europe';
import NorthAmerica from '../Map/NorthAmerica/NorthAmerica';
import Oceana from '../Map/Oceana/Oceana';
import SouthAmerica from '../Map/SouthAmerica/SouthAmerica';


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
            <h style={{fontFamily: "Courier New",  textDecoration: "underline",  fontSize: "20px"}}> 
            Search for your favorite animal below!</h>
            <br></br>
            <br></br>
             
            <div className="searchForm">
              {/* <form> */}
                <input
                style={{fontFamily: "Courier New", width: "600px"}}
                  placeholder="Search for..."
                  value={this.state.query}
                  onChange={this.handleInputChange}
                />
              {/* </form> */}
              <br></br>
              <br></br>
            {/* <div>{this.state.filteredData.map(i => <p>{i.name}</p>)}</div> */}
          </div>
          <div className= "animals" style={{fontFamily: "Courier New", width: "700px", textAlign: "center", justifyContent: "center"}}>
              {this.filteredData(this.state.filteredData)}
            </div>

            <Route exact path="/Africa"> <Africa animals={this.state.data}> </Africa></Route>
        <Route exact path="/Antartica" component={Antartica} />
        <Route path="/Asia" component={Asia} />
        <Route exact path="/Australia" component={Australia} />
        <Route exact path="/Europe" component={Europe} />
        <Route exact path="/NorthAmerica" component={NorthAmerica} />
        <Route path="/Oceana" component={Oceana} />
        <Route path="/SouthAmerica" component={SouthAmerica} />
        </div>
        );
      }
    }
// }
export default Continents;

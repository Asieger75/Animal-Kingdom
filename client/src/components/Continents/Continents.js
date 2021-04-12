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
      fetch(`/api/animals`)
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
       console.log(this.props)
        return (
          <div class= "data">
            <br></br>
            <h style={{fontFamily: "Garamond",  textDecoration: "underline",  fontSize: "30px"}}> 
            Search for your favorite animal below!</h>
            <br></br>
            <br></br>
             
            <div className="searchForm">
              {/* <form> */}
                <input
                style={{fontFamily: "Garamond", width: "600px"}}
                  placeholder="Search for..."
                  value={this.state.query}
                  onChange={this.handleInputChange}
                />
              {/* </form> */}
              <br></br>
              <br></br>
            {/* <div>{this.state.filteredData.map(i => <p>{i.name}</p>)}</div> */}
          </div>
          {this.props.location.pathname === "/" && 
          <div className= "animals" style={{fontFamily: "Garamond", width: "700px", textAlign: "center", justifyContent: "center", flex: "wrap"}}>
              {this.filteredData(this.state.filteredData)}
            </div>
          }

            <Route exact path="/Africa"> <Africa animals={this.state.data}> </Africa></Route>
        <Route exact path="/Antartica"><Antartica animals={this.state.data}></Antartica></Route>
        <Route path="/Asia"><Asia animals={this.state.data}></Asia></Route>
        <Route exact path="/Australia"><Australia animals={this.state.data}></Australia></Route>
        <Route exact path="/Europe"><Europe animals={this.state.data}></Europe></Route>
        <Route exact path="/NorthAmerica"><NorthAmerica animals={this.state.data}></NorthAmerica></Route>
        <Route path="/Oceana"><Oceana animals={this.state.data}></Oceana></Route>
        <Route path="/SouthAmerica"><SouthAmerica animals={this.state.data}></SouthAmerica></Route>
        </div>
        );
      }
    }
// }
export default Continents;

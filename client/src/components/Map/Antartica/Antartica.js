import React, { Component } from 'react';
class Antartica extends Component {
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
              filteredData: data.filter(element=>element.continent === "Antartica")
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
            return(
            <div className= "animals" style={{fontFamily: "Courier New", width: "700px", textAlign: "center", justifyContent: "center"}}>
                {this.filteredData(this.state.filteredData)}
              </div>
            )
    
    }
}
export default Antartica;

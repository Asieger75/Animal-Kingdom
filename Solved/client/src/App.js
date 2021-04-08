import Axios from "axios";
import React from "react"
import { render } from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from'./pages/home'
import Africa from './components/Map/Africa/Africa';
import Antartica from './components/Map/Antartica/Antartica';
import Asia from './components/Map/Asia/Asia';
import Australia from './components/Map/Australia/Australia';
import Europe from './components/Map/Europe/Europe';
import NorthAmerica from './components/Map/NorthAmerica/NorthAmerica';
import Oceana from './components/Map/Oceana/Oceana';
import SouthAmerica from './components/Map/SouthAmerica/SouthAmerica';
// import LinkTo from './components/UserAuthentication/LinkTo';
// import LogIn from './components/UserAuthentication/Login';
// import SignUp from './components/UserAuthentication/SignUp';
//import Animals from './components/animals/animals'
  function App() {
    return (
      <div>
        <Router>
      <div>
      <Route exact path="/" component={Home} />

      {/* <Route exact path="/LinkTo" component={LinkTo} />
      <Route exact path="/LogIn" component={LogIn} />
      <Route exact path="/SignUp" component={SignUp}/> */}

        <Route exact path="/Africa" component={Africa} />
        <Route exact path="/Antartica" component={Antartica} />
        <Route path="/Asia" component={Asia} />
        <Route exact path="/Australia" component={Australia} />
        <Route exact path="/Europe" component={Europe} />
        <Route exact path="/NorthAmerica" component={NorthAmerica} />
        <Route path="/Oceana" component={Oceana} />
        <Route path="/SouthAmerica" component={SouthAmerica} />

      </div>
    </Router>
      </div>
      
    );
  }


export default App;

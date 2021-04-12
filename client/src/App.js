import Axios from "axios";
import React from "react"
import { render } from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import LinkTo from './components/UserAuthentication/LinkTo';
// import LinkTo from './components/UserAuthentication/LinkTo';
// import LogIn from './components/UserAuthentication/Login';
// import SignUp from './components/UserAuthentication/SignUp';
//import Animals from './components/animals/animals'
  function App() {
    return (
      <div>
        <Router>
          <LinkTo />

      <div>
      <Route  path="/" component={(props)=><Home {...props} />} />

      {/* <Route exact path="/LinkTo" component={LinkTo} />
      <Route exact path="/LogIn" component={LogIn} />
      <Route exact path="/SignUp" component={SignUp}/> */}

      </div>
    </Router>
      </div>
      
    );
  }


export default App;

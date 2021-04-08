import Axios from "axios";
import React from "react"
import { render } from "react-dom";
import './App.css';
import LoginButton from "./components/LoginButton";
import Home from'./pages/home'
import { useAuth0 } from '@auth0/auth0-react';

//import Animals from './components/animals/animals'

  function App() {
    const {
      isLoading,
      isAuthenticated,
    //  error,
      user,
      //loginWithRedirect,
     // logout,
    } = useAuth0();
    console.log(isLoading,isAuthenticated, user)
    return (
      <div>
        <LoginButton></LoginButton>
        <Home />,
        
      </div>
    );
  }


export default App;

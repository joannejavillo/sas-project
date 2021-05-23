import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
//import logo from "./logo.svg";
import Title from './components/Header'
import SignUp from './components/SignupForm'
import "./App.css";



function App() {
  return (

    <Router>
      <div className="App">
        <Title name={"SAS Drugs"} />
        <div>
          <SignUp signup={"Signup"} />
        </div>

      </div>


    </Router>
  );
}


export default App;

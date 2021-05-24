import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import logo from "./logo.svg";
import Title from './components/Header'
import SignUp from './components/SignupForm'
import Form from './components/CreatePostForm'
import "./App.css";



function App() {
  return (
    <Router>
      <div className="App">
        <Title name={"SAS Drugs"} />
        <div>
          <SignUp signup={"Signup"} />
        </div>
      <Switch>
        <Form/>
        <Route exact path={["/","/drug"]}> 
        {/* /<Drug/> */}
        </Route>
       
      </Switch>
      </div>


    </Router>
  );
}


export default App;

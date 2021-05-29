import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import logo from "./logo.svg";
import Title from './components/Header'
import SignUp from './components/SignupForm'
import LogInForm from './components/LogInform'
import NavBar from './components/NavBar'
import SearchDrug from './pages/Drug'
//import Form from './components/CreatePostForm'
import "./App.css";
import API from "./utils/Api";
import './components/FontAwesomeIcons';
//import Footer from './components/Footer';



function App() {
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    // API call occurs here. 
    API.getDrug()
    .then(res => {
      setDrugs(res.data)
    })
    .catch(err => console.log(err));
  }, [])

  


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={"/"}>
            <Title />
      
          </Route>
          <Route path={"/Signup"}>
            <SignUp /> 
          </Route>
          <Route path={"/LogInForm"}>
            <LogInForm />
          </Route>
          <Route path={"/Homepage"}>
            <NavBar />
            <SearchDrug drugs={drugs} />
          </Route>
          {/* <Form />
          <Route exact path={["/", "/drug"]}>
                     {/* /<Drug /> */}
        </Switch>
      </div>
    </Router>
  );
};


export default App;

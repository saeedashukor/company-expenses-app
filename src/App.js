import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import DefaultLayout from './containers/DefaultLayout';
import Login from './components/User/Login';

class App extends Component{
  render(){
    return (
      <div>
        <Router>
          <Switch>
          <Route exact path="/login" render={props => <Login {...props}/>} />
          <Route path="/" render={props => <DefaultLayout {...props}/>} />
          </Switch>
          </Router>
      </div>
  
    );
  }
};

export default App;

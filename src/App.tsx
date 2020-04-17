import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DefaultLayout from './components/User/DefaultLayout';
import Login from './components/User/Login';
import './App.scss';

const App = () => {
  //const { state } = useStore();
  //const location = useLocation();

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
};

export default App;

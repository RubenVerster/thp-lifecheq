import React, { Component } from 'react';
import './App.css';
import NavCustom from './components/layout/NavCustom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/layout/Dashboard';
import Life from './components/insuranceComponents/Life';
import Trust from './components/insuranceComponents/Trust';
import Aid from './components/insuranceComponents/Aid';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebaseSetup from './config/FirebaseConfig';
// import Login from "./components/layout/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebaseSetup.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavCustom />
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
          <Switch>
            <Route exact path="/life" component={Life} />
          </Switch>
          <Switch>
            <Route exact path="/trust" component={Trust} />
          </Switch>
          <Switch>
            <Route exact path="/aid" component={Aid} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

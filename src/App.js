import React, { Component } from "react";
import "./App.css";
import NavCustom from "./components/layout/NavCustom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/layout/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import Adopt from "./components/pets/Adopt";
import firebaseSetup from "./config/FirebaseConfig";
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
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/adopt" component={Adopt} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

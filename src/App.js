import React, { Component } from 'react'; import './App.css';
import NavCustom from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard'
import Donate from './components/Donate'
import Adopt from './components/pets/Adopt'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavCustom />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/donate" component={Donate} />
            <Route path="/adopt" component={Adopt} />
            <Route path="/create" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
import React, { Component } from "react";
import firebaseSetup from "../../config/FirebaseConfig";
import { Button } from "reactstrap";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    firebaseSetup.auth().signOut();
  }

  render() {
    return <Button onClick={this.logout}>Logout</Button>;
  }
}

export default Logout;

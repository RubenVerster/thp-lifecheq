import { Container, Row, Col } from "reactstrap";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import firebaseSetup from "../../config/FirebaseConfig";
import Login from "../layout/Login";
import Logout from "../layout/Logout";
import CRUD from './CRUD'

class Home extends Component {
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
      <div>
        <Logout />
        {/* ternary operator to conditionally render admin or login */}
        {this.state.user ? (
          <Container style={{ marginTop: 30 }}>
            <Row>
              <Col sm={{ size: 7, offset: 0 }}>
                <CRUD />
              </Col>
              <Col sm={{ size: 4, offset: 1 }}>
              </Col>
            </Row>
          </Container>
        ) : (
            <Login />
          )}
      </div>
    );
  }
}

export default Home;

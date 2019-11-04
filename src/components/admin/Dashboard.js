import { Container, Row, Col } from "reactstrap";
import Stats from "../Stats";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import firebaseSetup from "../../config/FirebaseConfig";
import Login from "../layout/Login";
import Logout from "../layout/Logout";
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
        {this.state.user ? (
          <Container style={{ marginTop: 30 }}>
            <Row>
              <Col sm={{ size: 7, offset: 0 }}>
                <h1>ADMIN HOME</h1>
              </Col>
              <Col sm={{ size: 4, offset: 1 }}>
                <Stats />
                <h1>CRUD</h1>
                <Logout />
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

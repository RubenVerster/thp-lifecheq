import { Container, Row, Col } from 'reactstrap';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebaseSetup from '../../config/FirebaseConfig';
import Login from './Login';
import NavCustom from './NavCustom';
import Aid from '../insuranceComponents/Aid';
import Trust from '../insuranceComponents/Trust';
import Life from '../insuranceComponents/Life';
import logo from '../../img/logo.png';
import firebase from 'firebase';
class Dashboard extends Component {
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
      <div style={{ textAlign: 'center' }}>
        {/* ternary operator to conditionally render admin or login */}
        {this.state.user ? (
          <span>
            <NavCustom />
            <Container style={{ marginTop: 30 }}>
              <Row>
                <Col md="4">
                  <Aid />
                </Col>
                <Col md="4">
                  <Trust />
                </Col>
                <Col md="4">
                  <Life />
                </Col>
              </Row>
            </Container>
          </span>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

export default Dashboard;

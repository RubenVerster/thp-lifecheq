import { Container, Row, Col } from 'reactstrap';
import Stats from '../Stats'
import Feed from '../Feed'
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebaseSetup from '../../config/FirebaseConfig'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    firebaseSetup.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null })
      }
    })
  }

  render() {
    return (
      < Container style={{ marginTop: 30 }
      }>
        <Row>
          <Col sm={{ size: 7, offset: 0 }} >
            <Feed />
            <h1>ADMIN HOME</h1>
          </Col>
          <Col sm={{ size: 4, offset: 1 }} >
            <Stats />
            <h1>CRUD</h1>
          </Col>
        </Row>
      </Container >
    );
  }
}

export default Home;

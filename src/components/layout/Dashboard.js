import { Container, Row } from 'reactstrap';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebaseSetup from '../../config/FirebaseConfig';
import Login from '../layout/Login';
import Logout from '../layout/Logout';
import CRUD from './Crud';

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
        {/* ternary operator to conditionally render admin or login */}
        {/* {this.state.user ? ( */}
        <Container style={{ marginTop: 30 }}>
          {/* <Logout /> */}
          <Row>
            <CRUD />
          </Row>
        </Container>
        {/* ) : (
          <Login />
        )} */}
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import fire from "../../config/FirebaseConfig";
import { Card, Container } from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);

    //binding logic to connect functions
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      //not doing anything with the Promise, so empty objects yeah
      .then(u => {})
      .catch(error => {
        alert(error);
      });
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      //not doing anything with the Promise, so empty objects yeah
      .then(u => {})
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        alert(`${error}
        Please Review Your Credentials And Try Again`);
      });
  }
  render() {
    return (
      <Container style={{ marginTop: "50px" }}>
        <Card
          style={{
            padding: "25px",
            maxWidth: "450px",
            margin: "0 auto"
          }}
        >
          <form>
            <div class="form-group">
              <label for="exampleinput requiredEmail1">Email address</label>
              <input
                required
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                name="email"
                class="form-control"
                id="exampleinput requiredEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleinput requiredPassword1">Password</label>
              <input
                required
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                name="password"
                class="form-control"
                id="exampleinput requiredPassword1"
                placeholder="Password"
              />
            </div>
            <div>
              <button
                type="submit"
                onClick={this.login}
                class="btn btn-primary"
              >
                Login
              </button>
              <button
                onClick={this.signup}
                style={{ marginLeft: "25px" }}
                className="btn btn-success"
              >
                Signup
              </button>
            </div>
          </form>
        </Card>
      </Container>
    );
  }
}
export default Login;

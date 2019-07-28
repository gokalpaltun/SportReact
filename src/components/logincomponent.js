import React from "react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { Button, Segment, Form } from "semantic-ui-react";

class LoginComponent extends React.Component {
  state = {
    email: "",
    password: "",
    header: "",
    LoggedIn: false
  };
  handleLogin = () => {
    this.loginToApp(this.state.email, this.state.password);
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };
  loginToApp = (email, password) => {
    const data = {
      email: "gokalpaltun1994@gmail.com",
      password: "06_a.gokalp"
    };

    axios
      .post("http://localhost:8080/user/login", data)
      .then(res => {
        if (res) {
          alert("you logged in");
        }
        this.setState({ header: res.data, LoggedIn: true });
      })
      .catch(err => {
        console.log(err);
      });
  };
  signUpToApp = (email, password) => {
    const data = {
      username: "Gokalpaaaaa",
      email: "gokalpaltun19@gmail.com",
      password: "06_a.gokalp"
    };
    axios
      .post("http://localhost:8080/user/signup", data)
      .then(res => {
        alert(res.data);
        this.setState({ header: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <Segment inverted>
        <Form inverted>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <Form.Input
              fluid
              label="Password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </Form.Group>
          <Button type="submit" onClick={this.handleLogin}>
            Login
          </Button>
          <Button type="submit" onClick={this.signUpToApp}>
            SignUp
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default LoginComponent;

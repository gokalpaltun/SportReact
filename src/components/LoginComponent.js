import React from "react";
import { connect } from "react-redux";
import { LogInAction } from "../actions/login-action";
import axios from "axios";
class LoginComponent extends React.Component {
  state = {};

  handleLogIn = (email, password) => {
    this.props.handleLogIn(email, password);
  };

  render() {
    console.log(this);
    return (
      <div>
        <button onClick={this.handleLogIn}>hello</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});
const mapActionsToProps = {
  handleLogIn: LogInAction
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LoginComponent);

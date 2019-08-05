import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { connect } from "react-redux";
import HeaderComponent from "./components/HeaderComponent";
import LoginComponent from "./components/LoginComponent";

const mapStateToProps = store => ({
  isMyRecordsTabSelected: store.myRecordsTabReducer,
  isProfileTabSelected: store.profileTabReducer,
  isSportsTabSelected: store.sportsTabReducer
});

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <LoginComponent />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);

import React from "react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { Segment, Menu } from "semantic-ui-react";
import "./App.css";
import LoginComponent from "./components/logincomponent";
import { useSelector } from "react-redux";
import { stat } from "fs";

class App extends React.Component {
  state = {
    sports: [],
    SportsTabOpened: true,
    MyRecordsTabOpened: false,
    ProfileTabOpened: false
  };

  handleItemClick = (e, data) => {
    if (data.className === "RecordTab" || data.className === "ProfileTab")
      this.setState({ SportsTabOpened: false });
    else this.setState({ SportsTabOpened: true });
  };

  getSportTypes = () => {
    axios.get(`http://localhost:8080/sports`).then(res => {
      const sports = res.data;
      this.setState({ sports: sports });
    });
  };

  componentDidMount() {
    this.getSportTypes();
  }

  render() {
    // const counter = useState(state => state.counter);
    return (
      <div className="App">
        <h1>counter : {counter}</h1>
        <Segment inverted>
          <Menu inverted secondary>
            <Menu.Item
              className="SportTab"
              active
              name="Sports"
              onClick={this.handleItemClick}
            />
            <Menu.Item
              className="RecordTab"
              name="MyRecords"
              onClick={this.handleItemClick}
            />
            <Menu.Item
              className="ProfileTab"
              icon="user outline"
              position="right"
              name={"asdfasdfasdf"}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Segment>
        <LoginComponent />
      </div>
    );
  }
}

export default App;
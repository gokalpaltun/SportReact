import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment, Menu } from "semantic-ui-react";

class HeaderComponent extends React.Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Segment inverted>
          <Menu inverted secondary>
            <Menu.Item className="SportTab" name="Sports" />
            <Menu.Item className="RecordTab" name="MyRecords" />
            <Menu.Item
              className="ProfileTab"
              icon="user outline"
              position="right"
              name={"asdfasdfasdf"}
            />
          </Menu>
        </Segment>
      </div>
    );
  }
}

export default HeaderComponent;

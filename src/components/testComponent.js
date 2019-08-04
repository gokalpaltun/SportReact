import React from "react";
import { connect } from "react-redux";
class TestComponent extends React.Component {
  state = {};
  render() {
    console.log(this);
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

export default connect(mapStateToProps)(TestComponent);

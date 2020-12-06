import React, { Component } from "react";
import { buyIceCream } from "../../actions/iceCreams";
import { connect } from "react-redux";

class IceCream extends Component {
  render() {
    return (
      <div>
        <h2>Number of icecreams - {this.props.numOfIceCreams}</h2>
        <button onClick={this.props.buyIceCream}>Buy icecream</button>
      </div>
    );
  }
}

// TO INTERACT WITH THE STATE //

// step-1. map the state variables to the props of the component
const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

// step-2. map the dispatch method to the props of the component
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

// step-3. Connect the mapping functions to the component
export default connect(mapStateToProps, mapDispatchToProps)(IceCream);

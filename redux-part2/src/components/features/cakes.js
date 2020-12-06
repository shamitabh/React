import React, { Component } from "react";
import { buyCake } from "../../actions/cakes";
import { connect } from "react-redux";

class Cake extends Component {
  render() {
    return (
      <div>
        <h2>Number of cakes - {this.props.numOfCakes}</h2>
        <button onClick={this.props.buyCake}>Buy cake</button>
      </div>
    );
  }
}

// TO INTERACT WITH THE STATE //

// step-1. map the state variables to the props of the component
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

// step-2. map the dispatch method to the props of the component
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

// step-3. Connect the mapping functions to the component
export default connect(mapStateToProps, mapDispatchToProps)(Cake);

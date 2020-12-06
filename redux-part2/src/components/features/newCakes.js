import React, { Component } from "react";
import { buyNewCake } from "../../actions/newCakes";
import { connect } from "react-redux";

class NewCake extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (input) => {
    this.setState({
      number: input,
    });
  };

  render() {
    return (
      <div>
        <h2>Number of new cakes - {this.props.numOfNewCakes}</h2>
        <input
          type="text"
          //   the number will stay in the input field because of the below
          value={this.state.number}
          onChange={(event) => this.handleChange(event.target.value)}
        />
        <button onClick={() => this.props.buyNewCake(this.state.number)}>
          Buy {this.state.number} cakes
        </button>
      </div>
    );
  }
}

// TO INTERACT WITH THE STATE //

// step-1. map the state variables to the props of the component
const mapStateToProps = (state) => {
  return {
    numOfNewCakes: state.newCake.numOfNewCakes,
  };
};

// step-2. map the dispatch method to the props of the component
const mapDispatchToProps = (dispatch) => {
  return {
    buyNewCake: (number) => dispatch(buyNewCake(number)),
  };
};

// step-3. Connect the mapping functions to the component
export default connect(mapStateToProps, mapDispatchToProps)(NewCake);

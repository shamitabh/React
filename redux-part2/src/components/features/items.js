import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../../actions/cakes";
import { buyIceCream } from "../../actions/iceCreams";

function Item(props) {
  return (
    <div>
      {props.cake ? (
        <h2>Cakes - {props.item}</h2>
      ) : (
        <h2>Icecreams - {props.item}</h2>
      )}
      <button onClick={props.buyItem}>Buy items</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: () => dispatchFunction(),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);

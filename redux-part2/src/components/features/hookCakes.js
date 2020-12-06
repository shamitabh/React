import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyCake } from "../../actions/cakes";

function HookCakes() {
  const cakeNum = useSelector((state) => state.cake.numOfCakes);
  const cakeDispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes - {cakeNum}</h2>
      <button onClick={() => cakeDispatch(buyCake())}>
        Buy cake with hooks
      </button>
    </div>
  );
}

export default HookCakes;

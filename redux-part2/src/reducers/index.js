import cakeReducer from "./cakeReducer";
import newCakeReducer from "./newCakeReducer";
import iceCreamReducer from "./iceCreamReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  newCake: newCakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

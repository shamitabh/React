import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./types";
import axios from "axios";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

// thunk middleware allows this actionCreator to return a function instead of an  action
export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUserRequest);
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      const users = response.data;
      dispatch(fetchUserSuccess(users));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchUserFailure(errorMsg));
    });
};

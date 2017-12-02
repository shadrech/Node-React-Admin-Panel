import * as types from "./types";
import axios from "axios";

function fetchUsersAttempt() {
  return {
    type: types.FETCH_USERS_ATTEMPT
  };
}

function fetchUsersSuccess(users) {
  return {
    type: types.FETCH_USERS_SUCCESS,
    payload: { users }
  };
}

function fetchUsersFail(error) {
  return {
    type: types.FETCH_USERS_FAIL,
    payload: { error }
  };
}

export function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchUsersAttempt());

    axios.get("http://localhost:8000/v1/users")
      .then(res => dispatch(fetchUsersSuccess(res.data)))
      .catch(err => {
        console.error("ERROR FETCHING USERS", err);
        dispatch(fetchUsersFail(err.message));
      })
  }
}
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
    
    return axios.get("http://localhost:8000/v1/users")
      .then(res => {
        dispatch(fetchUsersSuccess(createUserObject(res.data.users)));
      })
      .catch(err => {
        console.error("ERROR FETCHING USERS", err);
        dispatch(fetchUsersFail(err.message));
      });
  }
}

function deleteUserSuccess(id) {
  return {
    type: types.DELETE_USER_SUCCESS,
    payload: { id }
  };
}

function deleteUserFail(error) {
  return {
    type: types.DELETE_USER_FAIL,
    payload: { error }
  };
}

export function deleteUser(id) {
  return (dispatch) => {
    return axios.delete(`http://localhost:8000/v1/users/${id}`)
      .then(() => dispatch(deleteUserSuccess(id)))
      .catch((err) => dispatch(deleteUserFail(err.message)));
  }
}

function createUserObject(users) {
  const userObj = {};
  users.forEach(user => {
    userObj[user._id] = user;
  });

  return userObj;
}
import * as types from "./types";
import axios from "axios";
import { push } from "react-router-redux";

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

function createUserSuccess(user) {
  return {
    type: types.CREATE_USER_SUCCESS,
    payload: { user }
  };
}

export function createUser(fields) {
  return (dispatch) => {
    axios.post("http://localhost:8000/v1/users", fields)
      .then(res => {
        dispatch(push("/"));
        dispatch(createUserSuccess(res.data.user));
      })
      .catch(err => console.error("ERROR CREATING USER", err));
  }
}

function updateUserSuccess(id, user) {
  return {
    type: types.UPDATE_USER_SUCCESS,
    payload: { id, user }
  };
}

export function updateUser(id, fields) {
  return dispatch => {
    axios.put(`http://localhost:8000/v1/users/${id}`, fields)
      .then(res => {
        dispatch(push("/"));
        dispatch(updateUserSuccess(id, res.data.user));
      })
      .catch(err => console.error("ERROR UPDATING USER", err));
  };
}

function createUserObject(users) {
  const userObj = {};
  users.forEach(user => {
    userObj[user._id] = user;
  });

  return userObj;
}
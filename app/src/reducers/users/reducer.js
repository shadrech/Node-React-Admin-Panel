import Immutable, { fromJS } from "immutable";
import * as types from "./types";

const INITIAL_STATE = Immutable.Map({
  loading: fromJS({
    create: false,
    fetch: false,
    update: false,
    delete: false
  }),
  users: fromJS({}),
  error: null
});

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.CREATE_USER_SUCCESS:
      return state.setIn(["users", action.payload.user._id], action.payload.user)
        .set("error", null)
        .setIn(["loading", "create"], false);

    case types.FETCH_USERS_ATTEMPT:
      return state.setIn(["loading", "fetch"], true);
    case types.FETCH_USERS_SUCCESS:
      return state.set("users", fromJS(action.payload.users))
        .set("error", null)
        .setIn(["loading", "fetch"], false);
    case types.FETCH_USERS_FAIL:
      return state.setIn(["loading", "fetch"], false)
        .set("error", action.payload.error);

    case types.UPDATE_USER_ATTEMPT:
      return state.setIn(["loading", "update"], true);
    case types.UPDATE_USER_SUCCESS:
      return state.setIn(["users", action.payload.id], action.payload.user)
        .set("error", null)
        .setIn(["loading", "update"], false);
    case types.UPDATE_USER_FAIL:
      return state.setIn(["loading", "update"], false)
        .set("error", action.payload.error);

    case types.DELETE_USER_ATTEMPT:
      return state.setIn(["loading", "delete"], true);
    case types.DELETE_USER_SUCCESS:
      return state.removeIn(["users", action.payload.id], action.payload.user)
        .set("error", null)
        .setIn(["loading", "delete"], false);
    case types.DELETE_USER_FAIL:
      return state.setIn(["loading", "delete"], false)
        .set("error", action.payload.error);
  
    default:
      return state;
  }
}
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchUsers } from "../reducers/users/actions";

class List extends React.Component {
  componentDidMount() {
    if (!Object.keys(this.props.users).length)
      this.props.fetchUsers();
  }

  render() {
    return (
      <div>List users</div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.get("users"),
  fetching: state.getIn(["loading", "fetch"])
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchUsers
}, dispatch);

export const UsersList = connect(mapStateToProps, mapDispatchToProps)(List);

import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { UserForm } from "./user-form.jsx";

class CreateEdit extends React.Component {
  render() {
    const user = this.props.user;

    return (
      <div className="app-wrapper">
        {user ? <h3>Edit {user.firstname}'s profile</h3> : <h3>Create New User</h3>}
        <hr />

        <UserForm user={user} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const hasUsers = !!state.get("users").size;

  return {
    user: (id && hasUsers) ? state.getIn(["users", id]).toJS() : null
  };
};

export const UserCreateEdit = withRouter(connect(mapStateToProps, null)(CreateEdit));

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter, Link } from "react-router-dom";

import { User } from "./user";
import { fetchUsers } from "../reducers/users/actions";

class List extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const users = Object.values(this.props.users);
    return (
      <div className="app-wrapper">
        <Link to="/users/create" className="add-btn"><i className="fa fa-plus" aria-hidden="true"></i></Link>
        {!!users.length && 
          users.map(user => <User key={user._id} user={user} />)
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.get("users").toJS(),
  fetching: state.getIn(["loading", "fetch"])
});

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    fetchUsers
  }, dispatch);
}

export const UsersList = withRouter(connect(mapStateToProps, mapDispatchToProps)(List));

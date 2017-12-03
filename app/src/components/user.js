import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter, Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { deleteUser } from "../reducers/users/actions";

class _User extends React.Component {
  deleteUser = () => {
    confirmAlert({
      title: "Confirm delete",
      message: `Are you sure you want to delete ${this.props.user.firstname}?`,
      confirmLabel: "Yes",
      cancelLabel: "No",
      onConfirm: () => this.props.deleteUser(this.props.user._id),
      onCancel: () => console.log("SPARE 'EM'!")
    });
  }

  render() {
    const rand = Math.random(); //images randomly generated when dom updates
    const {user} = this.props;

    return (
      <div className="user">
        <img className="item" alt="Random Profile" src={`https://randomuser.me/api/portraits/${rand > 0.5 ? "women" : "men"}/${Math.floor(rand * 100)}.jpg`} />
        <div className="item info">
          <p className="name">{`${user.firstname} ${user.lastname}`}</p>
          <p className="email">{user.email}</p>
        </div>
        <div className="item user-buttons">
          <Link className="user-btn edit" to={`/user/${user._id}`}><i className="fa fa-pencil" aria-hidden="true"></i></Link>
          <div className="user-btn delete" onClick={this.deleteUser}><i className="fa fa-trash" aria-hidden="true"></i></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  
});

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    deleteUser
  }, dispatch);
}

export const User = withRouter(connect(mapStateToProps, mapDispatchToProps)(_User));

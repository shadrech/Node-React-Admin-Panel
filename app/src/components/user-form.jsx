import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import { createUser, updateUser } from "../reducers/users/actions";

class Form extends React.Component {
  constructor(props) {
    super(props);
    
    const {user} = props;
    this.state = {
      firstname: user ? user.firstname : "",
      lastname: user ? user.lastname : "",
      email: user ? user.email : "",
      password: "",
    }
  }

  handleInputChange = (evt, key) => {
    const newState = {};
    newState[key] = evt.target.value;

    this.setState(newState);
  }

  handleFormSubmit = () => {
    const user = this.props.user;
    let fields = Object.assign(this.state);

    if (user) {
      delete fields.password;
      this.props.updateUser(user._id, fields);
    } else {
      this.props.createUser(fields);
    }
  }

  render() {
    const {user} = this.props;

    return (
      <div className="user-form">
        <div className="form-group">
          <input type="text" name="firstname" value={this.state.firstname} placeholder="First Name" onChange={evt => this.handleInputChange(evt, "firstname")} />
          <input type="text" name="lastname" value={this.state.lastname} placeholder="Last Name" onChange={evt => this.handleInputChange(evt, "lastname")} />
        </div>
        <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={evt => this.handleInputChange(evt, "email")} />
        {!user && <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={evt => this.handleInputChange(evt, "password")} />}
        <div className="form-submit">
          <button onClick={this.handleFormSubmit}>Confirm</button>
          <button onClick={() => this.props.history.push("/")}>Cancel</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  
});

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    updateUser,
    createUser
  }, dispatch);
}

export const UserForm = withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));

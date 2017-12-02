import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

class Edit extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>User edit</div>
    );
  }
}

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  
}, dispatch);

export const UserEdit = withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));

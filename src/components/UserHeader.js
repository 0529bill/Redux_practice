import React, { Component } from "react";

import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    // console.log(this.props.user);
    // return <div>user</div>;
    const { user } = this.props;
    if (!user) {
      return <div>LOADING..</div>;
    }

    return <h5>{user.name}</h5>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);

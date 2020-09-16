import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";

import UserHeader from "./UserHeader";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }
  renderList() {
    return this.props.posts.map((posts, id) => {
      return (
        <div key={id}>
          <h5>{posts.title}</h5>
          <div>{posts.body}</div>
          <div>{posts.userId}</div>
          <UserHeader userId={posts.userId} />
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, {
  fetchPostsAndUsers: fetchPostsAndUsers,
})(PostList);

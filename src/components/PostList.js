import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/PostList.css';

class PostList extends Component {
  render() {
    const list = Object.keys(this.props.posts).map(key => {
      let post = this.props.posts[key];
      return <li key={post.id}><Link to={`/post/${post.id}`} className="post-list__item">{post.title}</Link></li>;
    });

    return (
      <ul className="post-list">
        {list}
      </ul>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    posts: reduxState.posts
  };
}

export default connect(mapStateToProps)(PostList);

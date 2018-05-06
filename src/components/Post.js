import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { deletePost } from '../actions/actionCreators';
import '../styles/Post.css';

class Post extends Component {

  deleteHandler(id) {
    this.props.deletePost(id);
    this.props.history.push('/');
  }

  render() {
    const post = this.props.post;

    return (
      <div className="post">
        <h1 className="post__title">{post.title}</h1>
        <p className="post__body">{post.body}</p>
        <Link to={`/create/${post.id}`} className="post__button post__button--update">Update</Link>
        <button className="post__button post__button--delete" onClick={this.deleteHandler.bind(this, post.id)}>Delete</button>
      </div>
    );
  }
}

function mapStateToProps(reduxState, ownProps) {
  return {
    post: reduxState.posts[ownProps.match.params.id]
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deletePost
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);

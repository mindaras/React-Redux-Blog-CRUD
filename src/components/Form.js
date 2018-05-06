import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createPost, updatePost, incrementId } from '../actions/actionCreators';
import '../styles/Form.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.checkType = this.checkType.bind(this);

    this.state = {
      title: '',
      body: '',
      type: null,
    }
  }

  componentDidMount() {
    this.checkType();
  }

  componentDidUpdate() {
    this.checkType();
  }

  checkType() {
    if (this.props.match.params.id && this.state.type !== 'update') {
      const post = this.props.posts[this.props.match.params.id];
      this.setState({type: 'update', title: post.title, body: post.body});
    } else if (!this.props.match.params.id && this.state.type !== 'create') {
      this.setState({type: 'create', title: '', body: ''});
    }
  }

  changeHandler(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  submitHandler(e) {
    e.preventDefault();

    const id = this.state.type === 'create' ? this.props.currentId : this.props.match.params.id;

     if (this.state.type === 'create') {
       this.props.createPost(id, this.state.title, this.state.body);
       this.props.incrementId();
     } else {
       this.props.updatePost(id, this.state.title, this.state.body);
     }
    
     this.setState({title: '', body: '', type: null});

     this.props.history.push('/');
  }

  render() {
    return (
      <form className="form" onSubmit={this.submitHandler}>
        <input name="title"
               type="text"
               className="form__input"
               placeholder="title"
               value={this.state.title}
               onChange={this.changeHandler} />
         <textarea  name="body"
                    className="form__input form__input--textarea"
                    placeholder="body"
                    value={this.state.body}
                    onChange={this.changeHandler}></textarea>
        <input name="submit" type="submit" className="form__submit" />
      </form>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    posts: reduxState.posts,
    currentId: reduxState.currentId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createPost,
    updatePost,
    incrementId
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);

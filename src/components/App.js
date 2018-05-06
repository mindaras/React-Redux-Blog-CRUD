import React, { Component } from 'react';
import '../styles/App.css';
import Navigation from './Navigation';
import { Switch, Route } from 'react-router-dom';
import PostList from './PostList';
import Post from './Post';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/create/:id" component={Form} />
          <Route path="/create" component={Form} />
          <Route path="/post/:id" component={Post} />
          <Route path="/" component={PostList} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Posts from './components/Posts';
import PostForm from './components/PostForm';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <PostForm />
          <hr></hr>
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPosts } from '../actions/postAction';

class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    //call action
    this.props.createPosts(post);
  }
  render() {
    return (
      <div>
        <h1>ADD POST</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>TITLE :</label>
            <br></br>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>BODY :</label>
            <br></br>
            <textarea
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <br></br>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createPosts })(PostForm);

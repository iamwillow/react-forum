import React, { Component } from 'react';
import firebase from 'firebase';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.logoutChangeHandler = this.logoutChangeHandler.bind(this);
  }

  logoutChangeHandler() {
    firebase.auth().signOut();
  }

  render() {
    if (this.props.userLoggedIn) {
      return (
        <div>
          <p>begin header</p>
          <button onChange={this.logoutChangeHandler}>Logout</button>
          <p>end header</p>
        </div>
      );
    }
    return (
      <p>user is logged out</p>
    );
  }
}

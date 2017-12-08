import React, { Component } from 'react';
import firebase from 'firebase';
import { Route } from 'react-router-dom';

import Header from './components/header/header';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import './assets/styles/stylesheet.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageLoading: true,
      loggedIn: false,
    };

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        this.setState({
          loggedIn: true,
          pageLoading: false,
        });
      } else {
        this.setState({
          loggedIn: false,
          pageLoading: false,
        });
      }
    });
  }

  render() {
    if (this.state.pageLoading) {
      return (
        <div>Page loading ...</div>
      );
    }
    if (this.state.loggedIn) {
      return (
        <div>
          <Header userLoggedIn={this.state.loggedIn} />
          <Route path="/" component={Homepage} />
          <div className="footer" />
        </div>
      );
    }
    return (
      <div>
        <Header userLoggedIn={this.state.loggedIn} />
        <Route path="/login" component={Login} />
        <div className="footer" />
      </div>
    );
  }
}

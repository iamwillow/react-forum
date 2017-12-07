import React, { Component } from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';

import Routes from './routes';
import Header from './components/header/header';
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
    } else {
      if (this.state.loggedIn) {
        return (
          <div>
            <Header userLoggedIn={this.state.loggedIn} />
            <Routes />
            <div className="footer"></div>
          </div>
        );
      }
      return (
        <Redirect to="/login" />
      );
    }
  }
}

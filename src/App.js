import React, { Component } from 'react';
import firebase from 'firebase';
import { Switch } from 'react-router-dom';

import Header from './components/header/header';
import Routes from './routes';
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
    return (
      <div>
        <Header userLoggedIn={this.state.loggedIn} />
        <div className="wrapper">
          <Switch>
            <Routes userLoggedIn={this.state.loggedIn} />
          </Switch>
        </div>
        <div className="footer" />
      </div>
    );
  }
}

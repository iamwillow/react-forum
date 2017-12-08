import React, { Component } from 'react';
import firebase from 'firebase';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
    };
    this.emailChangeHandler = this.emailChangeHandler.bind(this);
    this.passChangeHandler = this.passChangeHandler.bind(this);
    this.loginSubmitHandler = this.loginSubmitHandler.bind(this);
    this.registerSubmitHandler = this.registerSubmitHandler.bind(this);
  }

  emailChangeHandler(event) {
    this.setState({
      email: event.target.value,
    });
  }

  passChangeHandler(event) {
    this.setState({
      pass: event.target.value,
    });
  }

  loginSubmitHandler() {
    firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.pass
    );
  }

  registerSubmitHandler() {
    //check for real email
    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.pass
    );
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.loginSubmitHandler}>
          <input
            type="email"
            placeholder="email"
            onChange={this.emailChangeHandler}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={this.passChangeHandler}
          />
          <br />
          <input type="submit" value="Login" />
        </form>
        <h1>Register</h1>
        <form onSubmit={this.registerSubmitHandler}>
          <input
            type="email"
            placeholder="email"
            onChange={this.emailChangeHandler}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={this.passChangeHandler}
          />
          <br />
          <input type="submit" value="Register" />
        </form>
        {
          // <button>Register</button>
          // <button>Logout</button>
        }
      </div>
    );
  }
}

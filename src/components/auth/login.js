import React, { Component } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      emailError: '',
      passwordError: '',
    };
  }

  emailChangeHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  }

  passChangeHandler = (event) => {
    this.setState({
      pass: event.target.value,
    });
  }

  loginSubmitHandler = () => {
    firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.pass
    ).catch((error) => {
      if (error.code === 'auth/user-not-found') {
        this.setState({
          emailError: 'This email does not exist',
          passwordError: '',
        });
      }
      if (error.code === 'auth/wrong-password') {
        this.setState({
          emailError: '',
          passwordError: 'Incorrect password',
        });
      }
      if (error.code === 'auth/invalid-email') {
        this.setState({
          emailError: 'This email is incorrectly formatted',
          passwordError: '',
        });
      }

      // error handling
      console.log('error code:  ', error.code);
      console.log('error message: ', error.message);
    });
  }

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={this.loginSubmitHandler}>
          <input
            type="email"
            placeholder="email"
            onChange={this.emailChangeHandler}
          />
          { this.state.emailError !== '' &&
            <p>{ this.state.emailError }</p>
          }
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={this.passChangeHandler}
          />
          { this.state.passwordError !== '' &&
            <p>{ this.state.passwordError }</p>
          }
          <br />
          <input type="submit" value="Login" />
        </form>
        <p>
          Don't have an account? <Link to="/register">Create one now</Link>
        </p>
      </div>
    );
  }
}

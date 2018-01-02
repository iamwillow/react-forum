import React, { Component } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

export default class Register extends Component {
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

  registerSubmitHandler = () => {
    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.pass
    ).catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        this.setState({
          emailError: 'This email already exists',
          passwordError: '',
        });
      }
      //error logs
      console.log('error code:  ', error.code);
      console.log('error message: ', error.message);
    });
  }

  render() {
    return (
      <div className="register">
        <h1>Register</h1>
        <form onSubmit={this.registerSubmitHandler}>
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
          <input type="submit" value="Register" />
        </form>
        <p>
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </div>
    );
  }
}

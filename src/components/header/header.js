import React from 'react';
import firebase from 'firebase';

function Header(props) {
  if (props.userLoggedIn) {
    return (
      <div className="header">
        <button onClick={() => firebase.auth().signOut() }>Logout</button>
      </div>
    );
  }
  return (
    <div className="header" />
  );
}

export default Header;

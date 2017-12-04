import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from "firebase";
import { Config } from './config.js';

var config = {
  apiKey: Config.firebaseApiKey,
  authDomain: Config.firebaseAuthDomain,
  databaseURL: Config.firebaseDatabaseURL,
  projectId: Config.firebaseProjectId,
  storageBucket: Config.firebaseStorageBucket,
  messagingSenderId: Config.firebaseMessagingSenderId
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

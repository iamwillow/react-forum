import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import firebase from 'firebase';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Config } from './config';

const config = {
  apiKey: Config.firebaseApiKey,
  authDomain: Config.firebaseAuthDomain,
  databaseURL: Config.firebaseDatabaseURL,
  projectId: Config.firebaseProjectId,
  storageBucket: Config.firebaseStorageBucket,
  messagingSenderId: Config.firebaseMessagingSenderId,
};
firebase.initializeApp(config);

ReactDOM.render(
  (
    <HashRouter>
      <App />
    </HashRouter>
  ), document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

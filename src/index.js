import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import firebase from 'firebase';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Config } from './config';

const config = {
  apiKey: Config.firebase.ApiKey,
  authDomain: Config.firebase.AuthDomain,
  databaseURL: Config.firebase.DatabaseURL,
  projectId: Config.firebase.ProjectId,
  storageBucket: Config.firebase.StorageBucket,
  messagingSenderId: Config.firebase.MessagingSenderId,
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

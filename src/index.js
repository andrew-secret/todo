import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD0X93OdlbYJX2w4-WHjObJnAysX0TSGDg",
  authDomain: "todo-app-10c48.firebaseapp.com",
  databaseURL: "https://todo-app-10c48.firebaseio.com",
  projectId: "todo-app-10c48",
  storageBucket: "",
  messagingSenderId: "321681460460"
};

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

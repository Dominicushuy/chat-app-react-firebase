/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js'
);

firebase.initializeApp({
  apiKey: 'AIzaSyDLQOk87ZgE6Kk-HcGLRbZXfEixTVdeXss',
  authDomain: 'chat-app-262f4.firebaseapp.com',
  databaseURL: 'https://chat-app-262f4.firebaseio.com',
  projectId: 'chat-app-262f4',
  storageBucket: 'chat-app-262f4.appspot.com',
  messagingSenderId: '580771480498',
  appId: '1:580771480498:web:b0ec51b7bf973c9e515aab',
});

firebase.messaging();

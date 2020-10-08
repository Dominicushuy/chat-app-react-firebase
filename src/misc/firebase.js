import { Notification as Toast } from 'rsuite';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';
import { isLocalhost } from './helpers';

const config = {
  apiKey: 'AIzaSyDLQOk87ZgE6Kk-HcGLRbZXfEixTVdeXss',
  authDomain: 'chat-app-262f4.firebaseapp.com',
  databaseURL: 'https://chat-app-262f4.firebaseio.com',
  projectId: 'chat-app-262f4',
  storageBucket: 'chat-app-262f4.appspot.com',
  messagingSenderId: '580771480498',
  appId: '1:580771480498:web:b0ec51b7bf973c9e515aab',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
export const functions = app.functions();

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    // 'BLs_I-HQyrAuUJJh8H3U0vtHGhVhXLMqoVoomeNL90GMKm0-o7sSoN9CJYRiBAVz-Yi7ZAni8mKateJfDwodTnw'
    'BFkqc2CCmb9sZQ4xDjR3YQYgpemB6uoQSY52d349DYaPufQRwSmdQ17ZEuiRJGEtVcCzrdcmXY4zqeVYPfQYsmE'
  );

  messaging.onMessage(({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  functions.useFunctionsEmulator('http://localhost:5001');
}

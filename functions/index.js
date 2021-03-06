const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require('./service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://chat-app-262f4.firebaseio.com',
});

const { sendFcm } = require('./src/fcm');

exports.sendFcm = sendFcm;

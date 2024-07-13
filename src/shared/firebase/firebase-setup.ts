'use client';

import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectDatabaseEmulator, getDatabase } from 'firebase/database';
import {
  connectFirestoreEmulator,
  initializeFirestore,
} from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import { connectStorageEmulator, getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDnva1g2FjthA-9Fz2vqsrhOKZwqbe0QTc',
  authDomain: 'scrappy-prod.firebaseapp.com',
  projectId: 'scrappy-prod',
  storageBucket: 'scrappy-prod.appspot.com',
  messagingSenderId: '307856848207',
  appId: '1:307856848207:web:9e04d7e36af9f769a7013a',
  measurementId: 'G-GP2M605EM4',
  databaseURL:
    'https://scrappy-prod-default-rtdb.asia-southeast1.firebasedatabase.app',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = initializeFirestore(app, {
  ignoreUndefinedProperties: true,
});
export const storage = getStorage(app);
export const auth = getAuth(app);

export const database = getDatabase(app);
export const functions = getFunctions(app, 'asia-southeast1');

const STORAGE_PORT = 9199;

export const getStorageUrl = (metadata: {
  bucket?: string;
  fullPath: string;
}) => {
  if (process.env.NEXT_PUBLIC_FIREBASE_ENV === 'development') {
    return `http://127.0.0.1:${STORAGE_PORT}/v0/b/${
      metadata.bucket ?? firebaseConfig.storageBucket
    }/o/${encodeURIComponent(metadata.fullPath)}?alt=media`;
  }
  return `https://firebasestorage.googleapis.com/v0/b/${
    metadata.bucket ?? firebaseConfig.storageBucket
  }/o/${encodeURIComponent(metadata.fullPath)}?alt=media`;
};

export const getCloudFunctionHost = () => {
  if (process.env.NEXT_PUBLIC_FIREBASE_ENV === 'development') {
    return 'http://localhost:5001/scrappy-prod/asia-southeast1/api';
  }
  return 'https://asia-southeast1-scrappy-prod.cloudfunctions.net/api';
};

if (process.env.NEXT_PUBLIC_FIREBASE_ENV === 'development') {
  console.info(
    'Firebase connection: %cemulators',
    'color: #FFCB2B; font-weight: bold'
  );

  connectFirestoreEmulator(firestore, 'localhost', 8080);
  connectStorageEmulator(storage, 'localhost', STORAGE_PORT);
  connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
  connectDatabaseEmulator(database, 'localhost', 9000);
  connectFunctionsEmulator(functions, 'localhost', 5001);
} else {
  console.info(
    `Firebase connection: %c${firebaseConfig.projectId}`,
    'color: #FFCB2B; font-weight: bold'
  );
}

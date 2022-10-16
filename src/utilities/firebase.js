import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, update } from 'firebase/database';
import { useCallback, useEffect, useState } from 'react';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjwFfwBLO6hZz7JT3WsfGFUVsg_tCvgQw",
    databaseURL: "https://react-tutorial-b9f38-default-rtdb.firebaseio.com",
    authDomain: "react-tutorial-b9f38.firebaseapp.com",
    projectId: "react-tutorial-b9f38",
    storageBucket: "react-tutorial-b9f38.appspot.com",
    messagingSenderId: "35921198161",
    appId: "1:35921198161:web:45339143cf534bb63dcc70",
    measurementId: "G-G8DZR5R900"
  };

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
  
    useEffect(() => (
      onValue(ref(database, path), (snapshot) => {
       setData( snapshot.val() );
      }, (error) => {
        setError(error);
      })
    ), [ path ]);
  
    return [ data, error ];
  };
  
  const makeResult = (error) => {
    const timestamp = Date.now();
    const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
    return { timestamp, error, message };
  };
  
  export const useDbUpdate = (path) => {
    const [result, setResult] = useState();
    const updateData = useCallback((value) => {
      update(ref(database, path), value)
      .then(() => setResult(makeResult()))
      .catch((error) => setResult(makeResult(error)))
    }, [database, path]);
  
    return [updateData, result];
  };
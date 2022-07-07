/* eslint-disable react/react-in-jsx-scope */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './src/app/store';

const CandidatePortal = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </>
  );
};

AppRegistry.registerComponent(appName, () => CandidatePortal);

// AppRegistry.registerComponent(appName, () => App);

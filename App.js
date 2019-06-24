/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

import React, { useState } from 'react';
import { Asset, AppLoading } from 'expo';
import { Provider } from 'react-redux';

import App from './containers/App';

import configureStore from './configureStore';

const initialState = {};
const store = configureStore(initialState);

function Root() {
  const [appReady, setAppReady] = useState(false);
  const _cachRessourceAsync = async () => {
    // load minimal ressources for the homepage
  }
  if(!appReady){
    return(
      <AppLoading
        startAsync={_cachRessourceAsync}
        onFinish={() => setAppReady(true)}
      />
    )
  }
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;

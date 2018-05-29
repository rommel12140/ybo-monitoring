import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './src/redux/reducers';

import StackNavigate from './src/container/AppContainer';


const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

//create redux store
function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

//Provide store to Stack Navigate container
export default App = () => (
  <Provider store={store}>
    <StackNavigate />
  </Provider>
)

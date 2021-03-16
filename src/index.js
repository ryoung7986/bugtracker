import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import App from './App';

// Reducers
import authReducer from '../src/Controllers/Redux/authSlice';
import bugReducer from '../src/Controllers/Redux/bugSlice';
import userReducer from '../src/Controllers/Redux/userSlice';

// Configure Redux
const reducer = combineReducers({
  auth: authReducer,
  bug: bugReducer,
  user: userReducer,
})

const store = configureStore({
  reducer
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

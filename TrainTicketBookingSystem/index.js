import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './features/user';
import Seat from './seats';
import Data from './download';
import App from './App';
const store=configureStore({
  reducer:{
    user:userReducer
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>  

  </React.StrictMode>
);

reportWebVitals();

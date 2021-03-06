import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './style.css';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import favoritesReducer from './reducers/favorites';
import searchQueryReducer from './reducers/search';
import languageReducer from './reducers/language';

const store = configureStore({
	reducer: {
		favorites: favoritesReducer,
		searchQuery: searchQueryReducer,
    language: languageReducer
	}
})

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

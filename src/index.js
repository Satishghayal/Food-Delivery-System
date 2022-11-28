import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Store from './store/Store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Router> 
      <Provider store={Store}>
      <App /> 
      </Provider>       
    </Router>    
  </React.StrictMode>,document.getElementById('root')
);
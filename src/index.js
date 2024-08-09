import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { OrderProvider } from './context/OrderContext';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import './styles.css';


ReactDOM.render(
  <OrderProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
    </OrderProvider>,
  document.getElementById('root')
);

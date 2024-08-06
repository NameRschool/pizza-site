import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/HomePage';
import OrderDisplayPage from './pages/OrderDisplayPage';
import OrderManagementPage from './pages/OrderManagementPage';
import OrderPage from './pages/OrderPage';
import PizzaEditingPage from './pages/PizzaEditingPage';



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order display" element={<OrderDisplayPage />} />
        <Route path="/order management" element={<OrderManagementPage />} />
        <Route path="/my order" element={<OrderPage />} />
        <Route path="/edit pizza" element={<PizzaEditingPage />} />
      </Routes>
    </div>
  );
}

export default App;

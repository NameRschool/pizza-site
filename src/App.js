import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/HomePage';
import OrderDisplayPage from './pages/OrderDisplayPage';
import OrderManagementPage from './pages/OrderManagementPage';
import OrderPage from './pages/OrderPage';
import PizzaEditingPage from './pages/PizzaEditingPage';
import AboutPage from './pages/AboutPage'
import { OrderProvider } from './context/OrderContext';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
            <OrderProvider>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order display" element={<OrderDisplayPage />} />
        <Route path="/order management" element={<OrderManagementPage />} />
        <Route path="/my order" element={<OrderPage />} />
        <Route path="/edit-pizza/:pizzaName" element={<PizzaEditingPage />} />
        <Route path="/about" element={<AboutPage />} />

      </Routes>
      <Footer />
    </div>
    </OrderProvider>
    </Router>
  );
}

export default App;

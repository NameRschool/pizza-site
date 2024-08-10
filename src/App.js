import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import OrderDisplayPage from './pages/OrderDisplayPage';
import OrderManagementPage from './pages/OrderManagementPage';
import OrderPage from './pages/OrderPage';
import PizzaEditingPage from './pages/PizzaEditingPage';
import AboutPage from './pages/AboutPage'
import { OrderProvider } from './context/OrderContext';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header /> 

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/edit-pizza" element={<PizzaEditingPage />} />
          <Route path="/edit-pizza/:id" element={<PizzaEditingPage />} />
          <Route path="/order-management" element={<OrderManagementPage />} />
          <Route path="/order-display/:orderId" element={<OrderDisplayPage />} />
        </Routes>

        <Footer /> 
      </div>
      {/* <Router>
            <OrderProvider>
    <div>
      <Header />
      <Routes>
      <Route path="/order" element={<OrderPage />} />
      <Route path="/edit-pizza" element={<PizzaEditingPage />} />
      <Route path="/order-management" element={<OrderManagementPage />} />
      <Route path="/order-display/:orderId" element={<OrderDisplayPage />} />
    </Routes>
      <Footer />
    </div>
    </OrderProvider>
    </Router> */}
    </ThemeProvider>
  );
}

export default App;

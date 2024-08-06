import React from 'react';
import { OrderProvider } from '../context/OrderContext';
import AddOrder from '../components/AddOrder';
import OrderList from '../components/OrderList';

function OrderPage() {
  return (
    <OrderProvider>
      <div>
        <h1>Pizza Orders</h1>
        <AddOrder />
        <OrderList />
      </div>
    </OrderProvider>
  );
}

export default OrderPage;

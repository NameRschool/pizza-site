import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState({
    customerName: '',
    pizzas: [],
  });

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const updatePizza = (id, updatedPizza) => {
    setCurrentOrder((prevOrder) => ({
      ...prevOrder,
      pizzas: prevOrder.pizzas.map((pizza) =>
        pizza.id === id ? updatedPizza : pizza
      ),
    }));
  };

  return (
    <OrderContext.Provider
      value={{ orders, currentOrder, setCurrentOrder, addOrder, updatePizza }}
    >
      {children}
    </OrderContext.Provider>
  );
};

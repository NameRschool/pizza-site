import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import pizzaTypes from '../types';
import GenericCard from '../components/GenericCard';


const OrderDisplayPage = () => {
  const { orderId } = useParams();
  const id = Number(orderId);
  const { orders, removeOrder } = useContext(OrderContext);
  const navigate = useNavigate();
  const order = orders.filter(order => order.id === id)[0];

  const handleConfirm = () => {
    removeOrder(id);
    navigate('/order-management');
  };

  return (
    <div>
      <h2>Order Details</h2>
      <h3>Customer Name: {order.customerName}</h3>
      <List>
        {order.pizzas.map((pizza, index) => (
              <GenericCard
                key={pizza.id}
                image={pizzaTypes.filter(p => p.id == pizza.pizzaTypeId)[0].image}
                title={`Pizza ${pizzaTypes.filter(p => p.id == pizza.pizzaTypeId)[0].name}`}
                text={`Size: ${pizza.size}\nToppings: ${pizza.toppings.length ? pizza.toppings.join(', ') : 'no toppings'}\nQuantity: ${pizza.quantity}`}
              />
            ))}
      </List>
      <Button onClick={handleConfirm} variant="contained" color="primary">Confirm</Button>
    </div>
  );
};

export default OrderDisplayPage;

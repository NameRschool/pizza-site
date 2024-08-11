import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import pizzaTypes from '../types';


const OrderDisplayPage = () => {
  const { orderId } = useParams();
  const id = Number(orderId);
  const { orders, setOrders, removeOrder } = useContext(OrderContext);
  const navigate = useNavigate();
  const order = orders.filter(order => order.id === id)[0];

  const handleConfirm = () => {
    console.log(orders)
    removeOrder(id);
   // setOrders(orders.filter((order) => order.id !== id));
    navigate('/manage-orders');
  };

  return (
    <div>
      <h2>Order Details</h2>
      <p>Customer Name: {order.customerName}</p>
      <List>
        {order.pizzas.map((pizza, index) => (
          <ListItem key={index}>
            <ListItemText primary={`Pizza ${index + 1}: ${pizzaTypes.filter(pt=>pt.id === pizza.pizzaTypeId)[0].name}, ${pizza.size}, Toppings: ${pizza.toppings.length ? pizza.toppings.join(', ') : 'no toppings'}`} secondary={`Quantity: ${pizza.quantity}`}/>
          </ListItem>
        ))}
      </List>
      <Button onClick={handleConfirm} variant="contained" color="primary">Confirm</Button>
    </div>
  );
};

export default OrderDisplayPage;

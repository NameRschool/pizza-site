import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import { Button, List, ListItem, ListItemText } from '@mui/material';

const OrderDisplayPage = () => {
  const { id } = useParams();
  const { orders, setOrders } = useContext(OrderContext);
  const navigate = useNavigate();
  const order = orders[id];

  const handleConfirm = () => {
    setOrders(orders.filter((_, index) => index !== parseInt(id)));
    navigate('/manage-orders');
  };

  return (
    <div>
      <h2>Order Details</h2>
      <p>Customer Name: {order.customerName}</p>
      <List>
        {order.pizzas.map((pizza, index) => (
          <ListItem key={index}>
            <ListItemText primary={`Pizza ${index + 1}: ${pizza.size}, Toppings: ${pizza.toppings.join(', ')}`} />
          </ListItem>
        ))}
      </List>
      <Button onClick={handleConfirm} variant="contained" color="primary">Confirm</Button>
    </div>
  );
};

export default OrderDisplayPage;

import React from 'react';
import { useOrder } from '../context/OrderContext';
import { Button, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';

function OrderList() {
  const { orders, removeOrder } = useOrder();

  return (
    <List>
      {orders.map(order => (
        <ListItem key={order.id}>
          <ListItemText 
            primary={`Order ID: ${order.id}`}
            secondary={`Customer: ${order.customerName}, Pizza: ${order.pizzaType}, Size: ${order.size}, Toppings: ${order.toppings}, Quantity: ${order.quantity}, Date: ${order.date}`}
          />
          <ListItemSecondaryAction>
            <Button variant="contained" color="secondary" onClick={() => removeOrder(order.id)}>
              Remove
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default OrderList;

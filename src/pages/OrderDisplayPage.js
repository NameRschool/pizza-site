import React from 'react';
import { useOrder } from '../context/OrderContext';
import { List, ListItem, ListItemText, ListItemSecondaryAction, Button, Container } from '@mui/material';

function OrderDisplayPage() {
  const { orders, removeOrder } = useOrder();

  return (
    <Container>
      <h1>Order List</h1>
      <List>
        {orders.map(order => (
          <ListItem key={order.id}>
            <ListItemText
              primary={`Order ID: ${order.id}`}
              secondary={`Customer: ${order.customerName}, Pizza: ${order.pizzaType}, Size: ${order.size}, Toppings: ${order.toppings.join(', ')}, Quantity: ${order.quantity}, Date: ${order.date}`}
            />
            <ListItemSecondaryAction>
              <Button variant="contained" color="secondary" onClick={() => removeOrder(order.id)}>
                Remove
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default OrderDisplayPage;

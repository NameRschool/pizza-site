import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import { Container, Typography, List, ListItem, ListItemText, Button, Paper, Box } from '@mui/material';

const OrderManagementPage = () => {
  const { orders } = useContext(OrderContext);
  const navigate = useNavigate();

  const handleViewOrder = (id) => {
    navigate(`/order-display/${id}`);
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom sx={{ mt: 6 }}>
        Order Management
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <List>
          {orders.map((order) => (
            <ListItem key={order.id} sx={{ marginBottom: 2 }}>
              <ListItemText
                primary={
                  <Typography component="span">
                    <strong>Order</strong> <span style={{ fontWeight: 'bold', color: '#BA3F1D' }}>#{order.id}</span>, customerName: <span style={{ fontWeight: 'bold' }}>{order.customerName}</span>
                  </Typography>
                }
              />
              <Button
                onClick={() => handleViewOrder(order.id)}
                variant="contained"
                color="secondary"
                sx={{ marginLeft: 'auto' }}
              >
                View
              </Button>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default OrderManagementPage;

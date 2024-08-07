import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Card, CardContent, Button, Grid } from '@mui/material';
import { OrderContext } from '../context/OrderContext';

function OrderManagementPage() {
  const navigate = useNavigate();
  const { orders } = useContext(OrderContext);

  const handleOrderClick = (orderId) => {
    navigate(`/order display/${orderId}`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Order Management
      </Typography>
      <Grid container spacing={3}>
        {orders.map((order, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">Order {index + 1}</Typography>
                <Typography variant="body2">Customer: {order.customerName}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleOrderClick(index)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default OrderManagementPage;

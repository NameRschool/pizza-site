// 
import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Card, CardContent, Button, Grid } from '@mui/material';
import { OrderContext } from '../context/OrderContext';

function OrderDisplayPage() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { orders, confirmOrder } = useContext(OrderContext);

  const order = orders[orderId];

  const handleConfirmClick = () => {
    confirmOrder(orderId);
    navigate('/order-management');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Order Details
      </Typography>
      {order ? (
        <div>
          <Typography variant="h6">Customer Name: {order.customerName}</Typography>
          <Typography variant="h6">Pizzas:</Typography>
          <Grid container spacing={3}>
            {order.pizzas.map((pizza, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="body1">
                      Type: {pizza.pizzaType}
                    </Typography>
                    <Typography variant="body1">
                      Size: {pizza.size}
                    </Typography>
                    <Typography variant="body1">
                      Toppings: {Object.keys(pizza.toppings).filter(topping => pizza.toppings[topping]).join(', ')}
                    </Typography>
                    <Typography variant="body1">
                      Quantity: {pizza.quantity}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={handleConfirmClick}
          >
            Confirm Order
          </Button>
        </div>
      ) : (
        <Typography>No order found</Typography>
      )}
    </Container>
  );
}

export default OrderDisplayPage;

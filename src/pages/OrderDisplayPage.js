import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import { Box, Button, List, Typography } from '@mui/material';
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
      <Typography variant="h2" gutterBottom sx={{ mt: 6 }}>
        Order Details
      </Typography>
      <Typography variant="h4" gutterBottom sx={{ mt: 3 }}>
        Customer Name: {order.customerName}
      </Typography>
      <List>
        {order.pizzas.map((pizza, index) => (
          <GenericCard
            key={pizza.id}
            image={pizzaTypes.filter(p => p.id == pizza.pizzaTypeId)[0].image}
            title={`Pizza ${pizzaTypes.filter(p => p.id == pizza.pizzaTypeId)[0].name}`}
            text={
              <>
                <Typography component="span" fontWeight="bold">Size:</Typography> {pizza.size}<br />
                <Typography component="span" fontWeight="bold">Toppings:</Typography> {pizza.toppings.length ? pizza.toppings.join(', ') : 'No toppings'}<br />
                <Typography component="span" fontWeight="bold">Quantity:</Typography> {pizza.quantity}
              </>
            } />
        ))}
      </List>
      <Box sx={{ mt: 4,mb: 4, textAlign: 'center' }}>
      <Button onClick={handleConfirm} variant="contained" color="primary">Confirm</Button>
    </Box>

    </div >
  );
};

export default OrderDisplayPage;

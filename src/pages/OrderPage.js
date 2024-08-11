import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import {
  Button,
  TextField,
  Grid,
  Typography,
  Box,
  Snackbar,
  Alert,
} from '@mui/material';
import GenericCard from '../components/GenericCard';
import pizzaTypes from '../types';

const OrderPage = () => {
  const navigate = useNavigate();
  const context = useContext(OrderContext);
  const { updateCurrentOrder } = useContext(OrderContext);
  const { currentOrder, setCurrentOrder, addOrder, removePizza } = context;
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);

  const handleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowError(false);
  };

  useEffect(() => { }, [currentOrder]);

  if (!context) {
    return <div>Loading...</div>;
  }

  const handleAddPizza = (pizza) => {
    const newPizzaId = updateCurrentOrder(pizza);
    navigate(`/edit-pizza/${newPizzaId}`);
  };

  const handleEditPizza = (id) => {
    navigate(`/edit-pizza/${id}`);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!currentOrder.pizzas.length) {
      setErrorMessage('Your order is empty. Add Pizzas to your order!');
      setShowError(true);
      return;
    }
    addOrder(currentOrder);
    setCurrentOrder({ customerName: '', pizzas: [] });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Snackbar
        open={showError}
        onClose={handleCloseSnackBar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity="warning"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>

      <form onSubmit={handleSubmitOrder}>
        <Typography variant="h3" gutterBottom>
          Enter Customer Information
        </Typography>
        <TextField
          label="Customer Name"
          value={currentOrder.customerName}
          onChange={(e) =>
            setCurrentOrder({ ...currentOrder, customerName: e.target.value })
          }
          fullWidth
          required
          margin="normal"
        />

        <Typography variant="h4" gutterBottom >
          Choose Your Pizza
        </Typography>
        <Grid container spacing={2}>
          {pizzaTypes.map((pizza) => (
            <Grid item xs={12} sm={6} md={4} key={pizza.id}>
              <GenericCard
                image={pizza.image}
                title={pizza.name}
                text={pizza.description}
                buttonText="Edit"
                onButtonClick={() => handleAddPizza(pizza.id)}
              />
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          Your Order
        </Typography>
        <Grid container spacing={2}>
          {currentOrder.pizzas.length > 0 ? (
            currentOrder.pizzas.map((pizza) => (
              <Grid item xs={12} sm={6} md={4} key={pizza.id}>
                <GenericCard
                  image={pizzaTypes.find(p => p.id === pizza.pizzaTypeId).image}
                  title={`Pizza ${pizzaTypes.find(p => p.id === pizza.pizzaTypeId).name}`}
                  text={
                    <>
                      <Typography component="span" fontWeight="bold">Size:</Typography> {pizza.size}<br />
                      <Typography component="span" fontWeight="bold">Toppings:</Typography> {pizza.toppings.length ? pizza.toppings.join(', ') : 'No toppings'}<br />
                      <Typography component="span" fontWeight="bold">Quantity:</Typography> {pizza.quantity}
                    </>
                  }
                  buttonText="Edit Pizza"
                  onButtonClick={() => handleEditPizza(pizza.id)}
                  showRemove={true}
                  onRemoveClick={() => removePizza(pizza.id)}
                />
              </Grid>
            ))
          ) : (
            <Typography
              variant="body1"
              align="center"
              sx={{ width: '100%', mt: 2 }}
            >
              No pizzas in the order.
            </Typography>
          )}
        </Grid>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mr: 2 }}
          >
            Submit Order
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default OrderPage;

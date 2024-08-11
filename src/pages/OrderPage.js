import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import { Button, TextField, List, ListItem, ListItemText } from '@mui/material';
import GenericCard from '../components/GenericCard';
import pizzaTypes from '../types';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';

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



  useEffect(() => {
  }, [currentOrder]);
  if (!context) {
    return <div>Loading...</div>;
  }


  const handleAddPizza = (pizza) => {
    const newPizzaId = updateCurrentOrder(pizza)
    navigate(`/edit-pizza/${newPizzaId}`);
  };

  const handleEditPizza = (id) => {
    navigate(`/edit-pizza/${id}`);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!currentOrder.pizzas.length) {
      setErrorMessage("Your order is empty. Add Pizzas to your order!");
      setShowError(true);
      return;
    }
    addOrder(currentOrder);
    setCurrentOrder({ customerName: '', pizzas: [] });
  };



  return (
    <div>
      <Snackbar open={showError} onClose={handleCloseSnackBar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert
          onClose={handleCloseSnackBar}
          severity="warning"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
      <br></br>
      <form onSubmit={handleSubmitOrder}>
        <TextField
          label="Customer Name"
          value={currentOrder.customerName}
          onChange={(e) => setCurrentOrder({ ...currentOrder, customerName: e.target.value })}
          fullWidth
          required
        />
        <h2>Pizza</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {pizzaTypes.map((pizza) => (
            <GenericCard
              key={pizza.id}
              image={pizza.image}
              title={pizza.name}
              text={pizza.description}
              buttonText="edit"
              onButtonClick={() => handleAddPizza(pizza.id)}
            />
          ))}
        </div>

        <h2>Order Page</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {currentOrder.pizzas.length > 0 ? (
            currentOrder.pizzas.map((pizza) => (
              <GenericCard
                key={pizza.id}
                image={pizzaTypes.filter(p => p.id == pizza.pizzaTypeId)[0].image}
                title={`Pizza ${pizzaTypes.filter(p => p.id == pizza.pizzaTypeId)[0].name}`}
                text={`Size: ${pizza.size}\nToppings: ${pizza.toppings.length ? pizza.toppings.join(', ') : 'no toppings'}\nQuantity: ${pizza.quantity}`}
                buttonText="Edit Pizza"
                onButtonClick={() => handleEditPizza(pizza.id)}
                showRemove={true}
                onRemoveClick={() => { removePizza(pizza.id) }}
              />
            ))
          ) : (
            <h2 style={{ textAlign: 'center' }}>No pizzas in the order.</h2>
          )}
        </div>
        <Button variant="contained" color="secondary" type='submit'>Submit Order</Button>
      </form>
    </div>
  );
};

export default OrderPage;
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';  // עדכון ל-useNavigate
import { OrderContext } from '../context/OrderContext';
import { Button, TextField, List, ListItem, ListItemText } from '@mui/material';

const OrderPage = () => {
  const context = useContext(OrderContext);
  const navigate = useNavigate();  

  if (!context) {
    return <div>Loading...</div>; 
  }

  const { currentOrder, setCurrentOrder, addOrder } = context;

  const handleAddPizza = () => {
    navigate('/edit-pizza');
  };

  const handleEditPizza = (id) => {
    navigate(`/edit-pizza/${id}`);
  };

  const handleSubmitOrder = () => {
    addOrder(currentOrder);
    setCurrentOrder({ customerName: '', pizzas: [] });
  };

  return (
    <div>
      <h2>Order Page</h2>
      <TextField
        label="Customer Name"
        value={currentOrder.customerName}
        onChange={(e) => setCurrentOrder({ ...currentOrder, customerName: e.target.value })}
        fullWidth
      />
      <Button onClick={handleAddPizza} variant="contained" color="primary">Add Pizza</Button>
      <List>
        {currentOrder.pizzas.map((pizza) => (
          <ListItem key={pizza.id}>
            <ListItemText primary={`Pizza ${pizza.id}: ${pizza.size}`} />
            <Button onClick={() => handleEditPizza(pizza.id)} variant="contained">Edit</Button>
          </ListItem>
        ))}
      </List>
      <Button onClick={handleSubmitOrder} variant="contained" color="secondary">Submit Order</Button>
    </div>
  );
};

export default OrderPage;

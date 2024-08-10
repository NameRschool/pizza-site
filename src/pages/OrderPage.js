import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import { Button, TextField, List, ListItem, ListItemText } from '@mui/material';
import GenericCard from '../components/GenericCard';
import pizzaTypes from '../types';

const OrderPage = () => {
  const context = useContext(OrderContext);
  const { updateCurrentOrder  } = useContext(OrderContext);

  const navigate = useNavigate();
 

  const { currentOrder, setCurrentOrder, addOrder } = context;

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

  const handleSubmitOrder = () => {
    addOrder(currentOrder);
    setCurrentOrder({ customerName: '', pizzas: [] });
  };



  return (
    <div>
      <br></br>
      <TextField
        label="Customer Name"
        value={currentOrder.customerName}
        onChange={(e) => setCurrentOrder({ ...currentOrder, customerName: e.target.value })}
        fullWidth
      />
      <h2>Pizza</h2>
      {pizzaTypes.map((pizza) => (
        <GenericCard
          image={pizza.image}
          title={pizza.name}
          text={pizza.description}
          buttonText="edit"
          onButtonClick={() => handleAddPizza(pizza.id)}
        />
      ))}

      <h2>Order Page</h2>
      {currentOrder.pizzas.length > 0 ? (
        currentOrder.pizzas.map((pizza) => (
          <GenericCard
            key={pizza.id}
            image="path_to_pizza_image"
            title={`Pizza ${pizzaTypes.filter(p => p.id == pizza.pizzaTypeId).name}`}
            text={`Size: ${pizza.size}\nToppings: ${pizza.toppings.join(', ')}`}
            buttonText="Edit Pizza"
            onButtonClick={() => handleEditPizza(pizza.id)}
          />
        ))
      ) : (
        <div>No pizzas in the order.</div>
      )}
      {/* <Button onClick={handleAddPizza} variant="contained" color="primary">Add Pizza</Button>
      <List>
        {currentOrder.pizzas.map((pizza) => (
          <ListItem key={pizza.id}>
            <ListItemText primary={`Pizza ${pizza.id}: ${pizza.size}`} />
            <Button onClick={() => handleEditPizza(pizza.id, pizza.name)} variant="contained">Edit</Button>
          </ListItem>
        ))}
      </List> */}
      <Button onClick={handleSubmitOrder} variant="contained" color="secondary">Submit Order</Button>
    </div>
  );
};

export default OrderPage;

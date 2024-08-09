import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { OrderContext } from '../context/OrderContext';
import { Button, TextField, List, ListItem, ListItemText } from '@mui/material';
import GenericCard from '../components/GenericCard';

const OrderPage = () => {
  const context = useContext(OrderContext);
  const navigate = useNavigate();  
  const pizzaTypes = [
    {
      image: 'https://via.placeholder.com/150',
      name: 'פיצה מרגריטה',
      description: 'קלאסית והכי מוצלחת',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'פיצה פרווה',
      description: 'שווה ומפנקת במיוחד',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'פיצה ללא גלוטן',
      description: 'טעימה כמו רגילה',
    }
  ];
  const { currentOrder, setCurrentOrder, addOrder } = context;

  useEffect(() => {
    console.log('Current Order:', currentOrder);
  }, [currentOrder]);
  if (!context) {
    return <div>Loading...</div>; 
  }


  const handleAddPizza = (pizza) => {
    navigate(`/edit-pizza/${encodeURIComponent(pizza)}`);
  };

  const handleEditPizza = (id,pizza) => {
    navigate(`/edit-pizza/${id}/${encodeURIComponent(pizza)}`);
  };

  const handleSubmitOrder = () => {
    addOrder(currentOrder);
    setCurrentOrder({ customerName: '', pizzas: [] });
  };

 

  return (
    <div>
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
          onButtonClick={() => handleAddPizza(pizza.name)}
        />
      ))}
      <h2>Order Page</h2>
      {currentOrder.pizzas.length > 0 ? (
        currentOrder.pizzas.map((pizza) => (
          <GenericCard
            key={pizza.id}
            image="path_to_pizza_image" 
            title={`Pizza ${pizza.name}`}
            text={`Size: ${pizza.size}\nToppings: ${pizza.toppings.join(', ')}`}
            buttonText="Edit Pizza"
            onButtonClick={() => handleEditPizza(pizza.id)}
          />
        ))
      ) : (
        <div>No pizzas in the order.</div>
      )}
      <Button onClick={handleAddPizza} variant="contained" color="primary">Add Pizza</Button>
      <List>
        {currentOrder.pizzas.map((pizza) => (
          <ListItem key={pizza.id}>
            <ListItemText primary={`Pizza ${pizza.id}: ${pizza.size}`} />
            <Button onClick={() => handleEditPizza(pizza.id,pizza.name)} variant="contained">Edit</Button>
          </ListItem>
        ))}
      </List>
      <Button onClick={handleSubmitOrder} variant="contained" color="secondary">Submit Order</Button>
    </div>
  );
};

export default OrderPage;

import React, { useContext, useState, useEffect } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import { Button, FormControl, InputLabel, MenuItem, Select, Checkbox, FormControlLabel } from '@mui/material';

const PizzaEditingPage = () => {
  const { id } = useParams();
  const { currentOrder, updatePizza } = useContext(OrderContext);
  const [pizza, setPizza] = useState({ id: id || Date.now(), size: '', toppings: [] });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const pizzaToEdit = currentOrder.pizzas.find((p) => p.id === parseInt(id));
      if (pizzaToEdit) setPizza(pizzaToEdit);
    }
  }, [id, currentOrder]);

  const handleSave = () => {
    updatePizza(pizza.id, pizza);
    navigate('/order');  };

  const handleCancel = () => {
    navigate('/order');  };

  const handleToppingChange = (topping) => {
    setPizza((prevPizza) => ({
      ...prevPizza,
      toppings: prevPizza.toppings.includes(topping)
        ? prevPizza.toppings.filter((t) => t !== topping)
        : [...prevPizza.toppings, topping],
    }));
  };

  return (
    <div>
      <h2>Edit Pizza</h2>
      <FormControl fullWidth>
        <InputLabel>Size</InputLabel>
        <Select
          value={pizza.size}
          onChange={(e) => setPizza({ ...pizza, size: e.target.value })}
        >
          <MenuItem value="small">Small</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="large">Large</MenuItem>
        </Select>
      </FormControl>
      <div>
        {['cheese', 'pepperoni', 'mushrooms', 'onions'].map((topping) => (
          <FormControlLabel
            key={topping}
            control={<Checkbox
              checked={pizza.toppings.includes(topping)}
              onChange={() => handleToppingChange(topping)}
            />}
            label={topping}
          />
        ))}
      </div>
      <Button onClick={handleSave} variant="contained" color="primary">Save</Button>
      <Button onClick={handleCancel} variant="contained">Cancel</Button>
    </div>
  );
};

export default PizzaEditingPage;

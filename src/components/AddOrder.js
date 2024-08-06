import React, { useState } from 'react';
import { useOrder } from '../context/OrderContext';
import { TextField, Button, Container, MenuItem, Select, FormControl, InputLabel, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

function AddOrder() {
  const { addOrder } = useOrder();
  const [customerName, setCustomerName] = useState('');
  const [pizzaType, setPizzaType] = useState('');
  const [size, setSize] = useState('');
  const [toppings, setToppings] = useState({
    cheese: false,
    pepperoni: false,
    mushrooms: false,
    onions: false,
  });
  const [quantity, setQuantity] = useState(1);

  const handleToppingChange = (event) => {
    setToppings({
      ...toppings,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      id: Date.now(),
      customerName,
      pizzaType,
      size,
      toppings: Object.keys(toppings).filter(key => toppings[key]),
      quantity,
      date: new Date().toLocaleDateString()
    };
    addOrder(newOrder);
    // ניקוי הטפסים
    setCustomerName('');
    setPizzaType('');
    setSize('');
    setToppings({
      cheese: false,
      pepperoni: false,
      mushrooms: false,
      onions: false,
    });
    setQuantity(1);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Pizza Type"
          value={pizzaType}
          onChange={(e) => setPizzaType(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        
        {/* תיבת בחירה עבור גודל הפיצה */}
        <FormControl fullWidth margin="normal">
          <InputLabel>Size</InputLabel>
          <Select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            label="Size"
            required
          >
            <MenuItem value="small">Small</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="large">Large</MenuItem>
          </Select>
        </FormControl>

        {/* תיבות סימון עבור תוספות */}
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={toppings.cheese} onChange={handleToppingChange} name="cheese" />}
            label="Cheese"
          />
          <FormControlLabel
            control={<Checkbox checked={toppings.pepperoni} onChange={handleToppingChange} name="pepperoni" />}
            label="Pepperoni"
          />
          <FormControlLabel
            control={<Checkbox checked={toppings.mushrooms} onChange={handleToppingChange} name="mushrooms" />}
            label="Mushrooms"
          />
          <FormControlLabel
            control={<Checkbox checked={toppings.onions} onChange={handleToppingChange} name="onions" />}
            label="Onions"
          />
        </FormGroup>

        <TextField
          label="Quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Add Order
        </Button>
      </form>
    </Container>
  );
}

export default AddOrder;

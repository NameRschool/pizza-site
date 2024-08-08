import React, { useState, useContext, useEffect } from 'react';
import {  OrderContext } from '../context/OrderContext';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, FormControl, InputLabel, Select, MenuItem, FormGroup, FormControlLabel, Checkbox, TextField, Button } from '@mui/material';

function PizzaEditingPage() {
    const { pizzaName,index } = useParams();
    const decodedPizzaType = decodeURIComponent(pizzaName);
    const navigate = useNavigate();
    const pizzaIndex = parseInt(index, 10);
    const { currentOrder, updatePizza } = useContext(OrderContext);
    const [size, setSize] = useState('');
    const [toppings, setToppings] = useState({
        cheese: false,
        pepperoni: false,
        mushrooms: false,
        onions: false,
    });
    const [quantity, setQuantity] = useState(1);


    // useEffect(() => {
    //     if (pizzaIndex !== undefined) {
    //         console.log('Pizza Index:', pizzaIndex);
    //         console.log('Pizzas:', currentOrder.pizzas);
    //         const pizza = currentOrder.pizzas[pizzaIndex];
    //         setSize(pizza.size);
    //         setToppings(pizza.toppings);
    //         setQuantity(pizza.quantity);
    //     }
    // }, [pizzaIndex, currentOrder.pizzas]);

    useEffect(() => {
        if (pizzaIndex !== undefined && currentOrder.pizzas[pizzaIndex]) {
            const pizza = currentOrder.pizzas[pizzaIndex];
            setSize(pizza.size || '');  // Use default value if undefined
            setToppings(pizza.toppings || {
                cheese: false,
                pepperoni: false,
                mushrooms: false,
                onions: false,
            });
            setQuantity(pizza.quantity || 1);
        }
    }, [pizzaIndex, currentOrder.pizzas]);
    
    const handleToppingChange = (e) => {
        setToppings({ ...toppings, [e.target.name]: e.target.checked });
    };


    const handleCancelClick = () => {
        alert("cancel");
        navigate('/my order');
    };

    const handleSaveClick = () => {
        alert("save");
        const updatedPizza = { size, toppings, quantity };
        console.log(pizzaIndex,updatedPizza.quantity)
        updatePizza(updatedPizza, pizzaIndex);
        navigate('/my order');
    };
    return (
        <Container>
            <h1>עריכת פיצה: {decodedPizzaType}</h1>
            <form >
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

                <div>
                    <Button onClick={handleCancelClick} variant="outlined" color="secondary">Cancel</Button>
                    <Button onClick={handleSaveClick} variant="contained" color="primary">Save</Button>
                </div>
            </form>
        </Container>


    );
}
export default PizzaEditingPage;

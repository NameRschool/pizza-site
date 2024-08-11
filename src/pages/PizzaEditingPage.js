import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import { Button, FormControl, InputLabel, MenuItem, Select, Checkbox, FormControlLabel, TextField } from '@mui/material';
import pizzaTypes from '../types';

const PizzaEditingPage = () => {

    let { id } = useParams();
    id = Number(id);
    const context = useContext(OrderContext);
    const { currentOrder, updatePizza, removePizza } = context;
    const currentPizza = currentOrder.pizzas.filter(p => p.id === id)[0];
    const pizzaType = pizzaTypes.filter(p => p.id === currentPizza.pizzaTypeId)[0];
    const [pizza, setPizza] = useState(currentPizza);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (id) {
    //         const pizzaToEdit = currentOrder.pizzas.find((p) => p.id === parseInt(id));
    //         if (pizzaToEdit) setPizza(pizzaToEdit);
    //     }
    // }, [id, currentOrder]);

    const handleSave = (e) => {
        e.preventDefault();
        updatePizza(pizza.id, { ...pizza, isNew: false });
        navigate('/order', { state: { newPizza: pizza } });
    };

    const handleCancel = () => {
        if (pizza.isNew) {
            removePizza(pizza.id)
        }
        navigate('/order');
    };

    //   const handleToppingChange = (topping) => {
    //     setPizza((prevPizza) => ({
    //       ...prevPizza,
    //       toppings: prevPizza.toppings.includes(topping)
    //         ? prevPizza.toppings.filter((t) => t !== topping)
    //         : [...prevPizza.toppings, topping],
    //     }));
    //   };


    const handleToppingChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === 'size') {
            setPizza(prevPizza => ({ ...prevPizza, size: value }));
        } else if (name.startsWith('topping')) {
            const topping = name.replace('topping-', '');
            setPizza(prevPizza => ({
                ...prevPizza,
                toppings: checked
                    ? [...prevPizza.toppings, topping]
                    : prevPizza.toppings.filter(t => t !== topping)
            }));
        }
    };


    return (
        <div>
            <h2>Edit Pizza {JSON.stringify(pizzaType.name)}</h2>
            <form onSubmit={handleSave}>
                <FormControl fullWidth>
                    <InputLabel id="sizeLabel">Size</InputLabel>
                    <Select
                        labelId="sizeLabel"
                        label="size"
                        value={pizza.size}
                        onChange={(e) => setPizza({ ...pizza, size: e.target.value })}
                        required
                    >
                        <MenuItem value="small">Small</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="large">Large</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth margin='dense'>
                    <TextField
                        label="Number"
                        type="number"
                        value={pizza.quantity}
                        onChange={(e) => { if (e.target.value > 0) { setPizza({ ...pizza, quantity: e.target.value }) } }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                    />
                </FormControl>
                <div>
                    {['cheese', 'pepperoni', 'mushrooms', 'onions'].map((topping) => (
                        <FormControlLabel
                            key={topping}
                            control={
                                <Checkbox
                                    name={`topping-${topping}`}
                                    checked={pizza.toppings.includes(topping)}
                                    onChange={handleToppingChange}
                                />
                            }
                            label={topping}
                        />
                    ))}
                </div>

                <Button onClick={handleSave} variant="contained" color="primary">Save</Button>
                <Button onClick={handleCancel} variant="contained">Cancel</Button>
            </form>
        </div>
    );
};

export default PizzaEditingPage;

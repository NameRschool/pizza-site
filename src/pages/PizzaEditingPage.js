import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import {
    Card,
    CardContent,
    CardHeader,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    FormControlLabel,
    Checkbox,
    Grid,
} from '@mui/material';
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


    const handleSave = (e) => {
        e.preventDefault();
        updatePizza(pizza.id, { ...pizza, isNew: false });
        navigate('/order', { state: { newPizza: pizza } });
    };

    const handleCancel = () => {
        console.log(currentPizza)
        if (pizza.isNew) {
            removePizza(pizza.id)
        }
        navigate('/order');
    };


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
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
            <Grid item xs={12} sm={8} md={6}>
                <Card>
                    <CardHeader
                        title={`Edit Pizza ${pizzaType.name}`}
                        titleTypographyProps={{ variant: 'h4' }} 
                    />
                    <CardContent>
                        <form onSubmit={handleSave}>
                            <FormControl fullWidth margin="normal">
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

                            <FormControl fullWidth margin="normal">
                                <TextField
                                    label="Number"
                                    type="number"
                                    value={pizza.quantity}
                                    onChange={(e) => {
                                        if (e.target.value > 0) {
                                            setPizza({ ...pizza, quantity: e.target.value });
                                        }
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    required
                                />
                            </FormControl>

                            <div style={{ marginTop: '16px' }}>
                                {['cheese', 'pepperoni', 'mushrooms', 'onions', 'olives'].map((topping) => (
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

                            <Grid container spacing={2} style={{ marginTop: '16px' }}>
                                <Grid item>
                                    <Button onClick={handleCancel} variant="contained" color="secondary">
                                        Cancel
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button onClick={handleSave} variant="contained" color="primary">
                                        Save
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};
export default PizzaEditingPage;

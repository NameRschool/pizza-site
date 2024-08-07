import React, { useState,useContext} from 'react';
import { useNavigate} from 'react-router-dom'
import GenericCard from '../components/GenericCard';
import { TextField, Button } from '@mui/material';
import { OrderContext } from '../context/OrderContext';

function OrderPage() {
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState('');
  const {orders, currentOrder, setCurrentOrder, addPizza, updatePizza, deletePizza, submitOrder } = useContext(OrderContext);

  const handleNameChange = (e) => {
    setCustomerName(e.target.value);
    setCurrentOrder({ ...currentOrder, customerName: e.target.value });
};


const handleSubmit = () => {
  submitOrder();
  alert('Order submitted!');
  navigate('/');
};

const customerOrders = orders.filter(order => order.customerName === customerName);
console.log('Current Order:', currentOrder);
console.log('Customer Orders:', customerOrders); 

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

    const handleButtonClick = (name) => {
      navigate(`/edit-pizza/${name}`);
      };

      const handleOrderSubmit = () => {
        // כאן תבצע את לוגיקת שליחת ההזמנה
        // למשל, תעדכן את ה-Context
      };
      
  return (
      <div>
        <h1>Pizza Orders {customerName}</h1>
        <TextField
        label="הכנס את שמך"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        fullWidth
      />

<button onClick={() => navigate('/edit-pizza')}>Add Pizza</button>
            {currentOrder.pizzas.map((pizza, index) => (
                <div key={index}>
                    <span>{pizza.pizzaType}, {pizza.size} pizza with {Object.keys(pizza.toppings).filter(topping => pizza.toppings[topping]).join(', ')}, Quantity: {pizza.quantity}</span>
                    <button onClick={() => navigate(`/edit-pizza/${index}`)}>Edit</button>
                    <button onClick={() => deletePizza(index)}>Delete</button>
                </div>
            ))}
            <button onClick={handleSubmit}>Submit Order</button>

            <h2>Customer Orders</h2>
            <h3>list order</h3>
            {customerOrders.map((order, index) => (
                <div key={index}>
                    <h3>Order {index + 1}</h3>
                    alert(Order {index + 1})
                    {order.pizzas.map((pizza, idx) => (
                        <div key={idx}>
                            <span>{pizza.pizzaType}, {pizza.size} pizza with {Object.keys(pizza.toppings).filter(topping => pizza.toppings[topping]).join(', ')}, Quantity: {pizza.quantity}</span>
                        </div>
                    ))}
                </div>
            ))}
        
      {pizzaTypes.map((pizza) => (
        <GenericCard
          image={pizza.image}
          title={pizza.name}
          text={pizza.description}
          buttonText="edit"
          onButtonClick={() => handleButtonClick(pizza.name)}
        />
      ))}
    
    <Button variant="contained" onClick={handleOrderSubmit}>
        שלח הזמנה
      </Button>
          </div>

  );
}

export default OrderPage;

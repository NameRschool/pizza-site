import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    let currentPizzaId = 1;
    //submitted orders
    const [orders, setOrders] = useState([]);
    //be submit
    const [currentOrder, setCurrentOrder] = useState({
        customerName: '',
        pizzas: [
        ],
    });

    const addOrder = (order) => {
        setOrders([...orders, order]);
    };

    //edit
    const updateCurrentOrder = (pizzaType) => {
        setCurrentOrder((prevOrder) => ({
            ...prevOrder,
            pizzas: [...prevOrder.pizzas, { id: currentPizzaId, pizzaTypeId: pizzaType, size: '', toppings: [], quantity: 1 }]

        }));
        return currentPizzaId++;
    };

    const updatePizza = (id, updatedPizza) => {
        setCurrentOrder((prevOrder) => ({
            ...prevOrder,
            pizzas: prevOrder.pizzas.map((pizza) =>
                pizza.id === id ? updatedPizza : pizza
            ),
        }));
    };

    const addPizza = (pizza) => {
        setCurrentOrder(prevOrder => ({
            ...prevOrder,
            pizzas: [...prevOrder.pizzas, pizza]
        }));
    };



    return (
        <OrderContext.Provider
            value={{ orders, currentOrder, setCurrentOrder, updateCurrentOrder, addOrder, addPizza, updatePizza }}
        >
            {children}
        </OrderContext.Provider>
    );
};

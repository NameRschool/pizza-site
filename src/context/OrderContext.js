import React, { createContext, useState } from 'react';
export const OrderContext = createContext();

let currentOrderId = 1;
let currentPizzaId = 1;

export const OrderProvider = ({ children }) => {
    //submitted orders
    const [orders, setOrders] = useState([]);

    //befor submit
    const [currentOrder, setCurrentOrder] = useState({
        customerName: '',
        pizzas: [
        ],
    });

    //add a order to the submited order list
    const addOrder = (order) => {
        order.id = currentOrderId++;
        setOrders([...orders, order]);
    };

    //edit a current order
    const updateCurrentOrder = (pizzaType) => {
        setCurrentOrder((prevOrder) => ({
            ...prevOrder,
            pizzas: [...prevOrder.pizzas, { id: currentPizzaId, pizzaTypeId: pizzaType, size: '', toppings: [], quantity: 1 }]

        }));
        return currentPizzaId++;
    };

    //update a singhl pizza in the current order
    const updatePizza = (id, updatedPizza) => {
        setCurrentOrder((prevOrder) => ({
            ...prevOrder,
            pizzas: prevOrder.pizzas.map((pizza) =>
                pizza.id === id ? updatedPizza : pizza
            ),
        }));
    };

    // add a pizza to the current order
    const addPizza = (pizza) => {
        setCurrentOrder(prevOrder => ({
            ...prevOrder,
            pizzas: [...prevOrder.pizzas, pizza]
        }));
    };

    // remove a pizza frome the current order
    const removePizza = (id) => {
        setCurrentOrder((prevOrder) => ({
            ...prevOrder,
            pizzas: prevOrder.pizzas.filter((pizza) =>
                pizza.id !== id
            ),
        }));
    };

    // remove an order from the submitted orders
    const removeOrder = (id) => {
        setOrders(orders.filter((order) => order.id !== id));
    };


    return (
        <OrderContext.Provider
            value={{ orders, currentOrder, setCurrentOrder, updateCurrentOrder, addOrder, addPizza, updatePizza, removePizza, removeOrder }}
        >
            {children}
        </OrderContext.Provider>
    );
};

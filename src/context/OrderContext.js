import React, { createContext, useContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);
    const [currentOrder, setCurrentOrder] = useState({
        customerName: '',
        pizzas: [],
    });

    const addOrder = (customerName, pizza,index) => {
        console.log(customerName, pizza + " cont");
    
        setCurrentOrder(prevOrder => ({
            customerName,
            pizzas: [...prevOrder.pizzas, { type: pizza }],
        }));
    };

    
    const addPizza = (pizza) => {
        console.log(pizza+"add pizza")
        setCurrentOrder((prevOrder) => ({
            ...prevOrder.customerName,
            pizzas: [...prevOrder.pizzas, pizza],
        }));
    };
    

    const updatePizza = ( updatedPizza,index) => {
        console.log(index+"updatedPizza")
        const newPizzas = [...currentOrder.pizzas];
        newPizzas[index] = updatedPizza;
        console.log(newPizzas[index]+"updatedPizza")
        setCurrentOrder({ ...currentOrder, pizzas: newPizzas });
    };
    // const updatePizza = ( updatedPizza,index) => {
    //     const newPizzas = [...currentOrder.pizzas];
    //     newPizzas[index] = { ...newPizzas[index], ...updatedPizza };
    //     setCurrentOrder({ ...currentOrder, pizzas: newPizzas });
    // };
    
    const deletePizza = (index) => {
        const newPizzas = [...currentOrder.pizzas];
        newPizzas.splice(index, 1);
        setCurrentOrder((prevOrder) => ({
            ...prevOrder,
            pizzas: newPizzas,
        }));
    };

    const submitOrder = () => {
        setOrders([...orders, currentOrder]);
        setCurrentOrder({
            customerName: '',
            pizzas: [{
                type:"",
                size:""
            }],
        });
    };

    return (
        <OrderContext.Provider value={{ orders, currentOrder, setCurrentOrder,addOrder, addPizza, updatePizza, deletePizza, submitOrder }}>
            {children}
        </OrderContext.Provider>
    );
};
export const useOrder = () => useContext(OrderContext);
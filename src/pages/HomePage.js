import React, { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';
import PizzaList from '../components/PizzaList';

function Home() {
  const { pizzas } = useContext(PizzaContext);
  return (
    <div>
      <h1>Pizza Menu</h1>
      <PizzaList pizzas={pizzas} />
    </div>
  );
}

export default Home;

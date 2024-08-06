// import React, { useContext } from 'react';
import img from '../image/logo.jpg'
import GenericCard from '../components/GenericCard';
// import { PizzaContext } from '../context/PizzaContext';
// import PizzaList from '../components/PizzaList';


function HomePage() {
  // const { pizzas } = useContext(PizzaContext);
  const handleButtonClick = () => {
    alert('Button clicked!');
  };
  return (
    <>
        <div>
      <h1>Pizza Menu</h1>
      {/* <PizzaList pizzas={pizzas} /> */}
    </div>
    <GenericCard 
        image="https://via.placeholder.com/150"
        title="Card Title 1"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        buttonText="Click Me"
        onButtonClick={handleButtonClick}
      />
          <img src={img} alt="logo" className="d-block w-100" />
      </>
    );
}


export default HomePage;

import './Menu.css';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyPizza, cancelPizza } from './Actions/PizzaSlice';
import { motion } from 'framer-motion';

import Footer from '../Page/Extra/Footer';
import PizzasLists from './PizzasList';

const PizzaList = () => {
   const dispatch = useDispatch();
   const pizzas = useSelector((state) => state.pizza.pizzas);
   const [selectedPizza, setSelectedPizza] = useState(null);
   const [totalPrice, setTotalPrice] = useState(0);

   const handleBuyClick = (pizza) => {
      setSelectedPizza(pizza);
   };

   const handleCancelClick = (pizzaId) => {
      const pizzaToCancel = pizzas.find((pizza) => pizza.id === pizzaId);
      if (pizzaToCancel) {
         setTotalPrice(totalPrice - pizzaToCancel.price * pizzaToCancel.count);
         dispatch(cancelPizza(pizzaId));
      }
   };

   const handleAddToCart = (pizza, sizeIndex) => {
      const size = pizza.sizes[sizeIndex];
      const price = pizza.price[sizeIndex];
      const pizzaWithSize = { ...pizza, price, size, count: 1, type: pizza.types[sizeIndex] }; // Add type
      dispatch(buyPizza(pizzaWithSize));
      setTotalPrice(totalPrice + price);
      setSelectedPizza(null);
   };

   return (
      <div>
         <div className="pizza-list">
            {PizzasLists.map((pizza) => {
               const pizzaInCart = pizzas.find((p) => p.id === pizza.id);
               const buyStatus = pizzaInCart ? pizzaInCart.count : 0;
               return (
                  <div key={pizza.id} className="pizza-item">
                     <img src={pizza.img} alt={pizza.title} className="pizza-img" />
                     <div className="pizza-details">
                        <h1 className="pizza-itemTitle">{pizza.title}</h1>
                        <p className="pizza-itemParagraph">Price: {pizza.price.join(', ')}</p>
                        <p className="pizza-itemParagraph">Sizes: {pizza.sizes.join(', ')}</p>
                        <p className="pizza-itemParagraph">Rating: {pizza.rating}</p>
                     </div>
                     <button className="popular__button" onClick={() => handleBuyClick(pizza)}>
                        Buy <span>{buyStatus}</span>
                     </button>
                     <button className="pizza-cancel" onClick={() => handleCancelClick(pizza.id)}>
                        Cancel
                     </button>
                  </div>
               );
            })}
         </div>

         {selectedPizza && (
            <section className="selectedPizzaContainer">
               <div key={selectedPizza.id} className="selectedPizzaList">
                  <div className="selectedPizzaImage">
                     <img src={selectedPizza.img} alt={selectedPizza.title} className="menu__img" />
                  </div>
                  <div className="selectedPizza">
                     <div>
                        <h3 className="selectedPizzaTitle">{selectedPizza.title}</h3>
                     </div>
                     <div className="selectedPizzaInfo">
                        <p className="popular__description">{selectedPizza.description}</p>
                        <p className="c__size">Types: {selectedPizza.types.join(', ')}</p>
                        <p className="popular__price">Rating: {selectedPizza.rating}</p>
                     </div>
                     <div className="selectedPizzaButton">
                        {selectedPizza.sizes.map((size, index) => (
                           <button
                              className="popular__button"
                              key={index}
                              onClick={() => handleAddToCart(selectedPizza, index)}
                           >
                              {size} - ₱{selectedPizza.price[index]}
                           </button>
                        ))}
                        <button
                           className="selectedCloseButton"
                           onClick={() => setSelectedPizza(null)}
                        >
                           <svg
                              width="46"
                              height="46"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"></path>
                           </svg>
                        </button>
                     </div>
                  </div>
               </div>
            </section>
         )}
      </div>
   );
};

const Menu = () => {
   const [currentPizzaIndex, setCurrentPizzaIndex] = useState(0);
   const [showNextPizza, setShowNextPizza] = useState(false);

   const containerRef = useRef(null);

   const handleClick = () => {
      if (containerRef.current) {
         containerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
   };

   const handleNextPizza = () => {
      setShowNextPizza(true);
      setTimeout(() => {
         setCurrentPizzaIndex((prevIndex) => (prevIndex + 1) % PizzasLists.length);
         setShowNextPizza(false);
      }, 300); // Adjust the delay to match the transition duration
   };

   const handlePrevPizza = () => {
      setShowNextPizza(true);
      setTimeout(() => {
         setCurrentPizzaIndex(
            (prevIndex) => (prevIndex - 1 + PizzasLists.length) % PizzasLists.length
         );
         setShowNextPizza(false);
      }, 300); // Adjust the delay to match the transition duration
   };
   const currentPizza = PizzasLists[currentPizzaIndex]; // Pizza button manipulating

   return (
      <>
         <div className="c-menu">
            <div className="c__Container">
               <motion.section
                  key={currentPizza.id}
                  className={`c__containerA ${showNextPizza ? 'hidden' : ''}`}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.3 }}
               >
                  <button onClick={handlePrevPizza} className="c__arrowOrder">
                     <svg
                        className="c_arrowOrderLeft"
                        width="100"
                        height="100"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="m11.828 12 2.829 2.829-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12Z"></path>
                     </svg>
                  </button>
                  <img src={currentPizza.img} alt={currentPizza.name} className="menu__img" />
                  <button onClick={handleNextPizza} className="c__arrowOrder">
                     <svg
                        className="c_arrowOrderRight"
                        width="100"
                        height="100"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="m12.172 12-2.83-2.827 1.415-1.415L15 12l-4.243 4.243-1.414-1.415L12.172 12Z"></path>
                     </svg>
                  </button>
               </motion.section>
               <section>
                  <div className="c__order">
                     <div className="c__OrderList">
                        <h1 className="home__title">{currentPizza.title}</h1>
                        <p className="popular__description">{currentPizza.description}</p>
                        <p className="c__size">Sizes: {currentPizza.sizes.join(', ')}</p>
                        <p className="popular__price">Rating: {currentPizza.rating}</p>
                     </div>
                     <div className="c__buttonOrderCart">
                        <button onClick={handleClick} className="popular__button">
                           Order Now
                        </button>
                     </div>
                  </div>
               </section>
            </div>
         </div>
         <motion.section
            className="pizza-Header section"
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
         >
            <h1 className="pizza-titleOrder">What Pizza Do You Want?</h1>
            <PizzaList />
         </motion.section>
         <Footer />
      </>
   );
};

export default Menu;

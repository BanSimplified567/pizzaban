import { useState } from 'react';
import { useSelector } from 'react-redux';
import './Cart.Module.css';

const Cart = () => {
   const pizzas = useSelector((state) => state.pizza.pizzas);
   const totalPrice = useSelector((state) => state.pizza.totalPrice);
   const [showForm, setShowForm] = useState(false);
   const [isClosing, setIsClosing] = useState(false);

   const toggleForm = () => {
      if (showForm) {
         setIsClosing(true);
         setTimeout(() => {
            setShowForm(false);
            setIsClosing(false);
         }, 500); // match the animation duration
      } else {
         setShowForm(true);
      }
   };

   if (pizzas.length === 0) {
      return <p>No pizza available</p>;
   }

   return (
      <div className="container">
         <div className="pizza-list section">
            {pizzas.map((pizza) => (
               <div key={`${pizza.id}-${pizza.size}`} className="pizza-item">
                  <img src={pizza.img} alt={pizza.title} className="pizza-img" />
                  <div>
                     <h3>{pizza.title}</h3>
                     <p>Order Quantity: {pizza.count}</p>
                     <p>Total Quantity Price: ₱{pizza.price * pizza.count}</p>
                  </div>
               </div>
            ))}
         </div>
         <button onClick={toggleForm} className="deliver-button">
            Deliver
         </button>
         <div className="total-price">Total Price: ₱{totalPrice}</div>

         {showForm && (
            <div className={`formPizzaContainer ${isClosing ? 'slide-out' : ''}`}>
               <div className="formContainer">
                  <h3 className="formTitle">Information</h3>
                  <h4 className="formSectionTitle">
                     We Can&#34;t Wait To Deliver The Best Pizza Ever
                  </h4>
                  <form className="FormContact" action="" method="post">
                     <fieldset className="forFieldset">
                        <label className="formLabel">
                           Name:
                           <input
                              className="formInput"
                              placeholder="Your name"
                              type="text"
                              required
                           />
                        </label>
                        <label className="formLabel">
                           Number:
                           <input
                              className="formInput"
                              placeholder="Your Phone Number"
                              type="tel"
                              required
                           />
                        </label>
                        <label className="formLabel">
                           Email:
                           <input
                              className="formInput"
                              placeholder="Your Email Address"
                              type="email"
                              required
                           />
                        </label>
                        <label className="formLabel">
                           Comment:
                           <textarea
                              className="formTextArea"
                              placeholder="Type your Message Here...."
                              required
                           ></textarea>
                        </label>
                        <button
                           className="formButtonSubmit"
                           name="submit"
                           type="submit"
                           id="contact-submit"
                           data-submit="...Sending"
                        >
                           Submit
                        </button>
                     </fieldset>
                  </form>
                  <button className="formClosedButton" onClick={toggleForm}>
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
         )}
      </div>
   );
};

export default Cart;

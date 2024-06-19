import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import PizzaBan from '../../img/Pizza-Image/PizzBan.jpg';
import PizzaBan1 from '/pizza.png';
import PizzaBan3 from '/pizza2.png';
import PizzaBan2 from '/pizza3.png';
import PizzaBan4 from '/pizza4.png';
import PizzaBan5 from '../../img/pizza-slice.png';
import California from '../../img/Pizza-Image/California Pizza.jpg';
import './Style/Home.css';
import Footer from './Extra/Footer';

function Home() {
   const slideInLeft = {
      hidden: { x: '-100vw' },
      visible: { x: 0, transition: { type: 'spring', stiffness: 50 } },
   };

   const slideInRight = {
      hidden: { x: '100vw' },
      visible: { x: 0, transition: { type: 'spring', stiffness: 50 } },
   };
   return (
      <>
         <div className="container ">
            <section className="home section" id="home">
               <div className="home__container container grid">
                  <motion.div
                     className="home__data"
                     variants={slideInLeft}
                     initial="hidden"
                     animate="visible"
                  >
                     <span className="section__subtitle">Welcome</span>
                     <h1 className="home__title">
                        The <br />
                        Pizza <br />
                        Ban
                     </h1>
                     <p className="home__description">
                        Welcome to PizzaBan, your ultimate destination for a slice of pure delight!
                        🍕 At PizzaBan, we redefine the pizza experience with a perfect blend of
                        tradition and innovation. Our passion for crafting mouthwatering pizzas goes
                        beyond just toppings – it&#39;s an art form. From classic favorites to bold,
                        creative combinations, each bite is a journey into a world of flavors.
                     </p>
                     <NavLink className="button" to="/menu">
                        Order Now
                        <svg
                           width={26}
                           height={26}
                           fill="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z" />
                        </svg>
                     </NavLink>
                  </motion.div>
                  <motion.img
                     src={PizzaBan}
                     alt="about image"
                     className="about__img"
                     variants={slideInRight}
                     initial="hidden"
                     animate="visible"
                  />
               </div>
            </section>

            <section className="home section" id="about">
               <div className="home__container container grid">
                  <motion.div
                     className="about__data section"
                     variants={slideInLeft}
                     initial="hidden"
                     animate="visible"
                  >
                     <span className="section__subtitle">About Us</span>
                     <h2 className="section__title">We Offer Healthy Food</h2>
                     <p className="home__description">
                        At PizzaBan, we&#39;re not just about delicious pizzas – we&#39;re on a
                        mission to redefine your perception of healthy indulgence. 🌿 ✨ Healthful
                        Ingredients: Our commitment to your well-being starts with thoughtfully
                        selected, high-quality ingredients. From nutrient-rich whole-grain crusts to
                        fresh, locally sourced vegetables, every bite reflects our dedication to
                        wholesome goodness.
                     </p>
                     <NavLink className="button" to="/menu">
                        <svg
                           width={26}
                           height={26}
                           fill="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z" />
                        </svg>
                        Order Now
                     </NavLink>
                  </motion.div>
                  <motion.img
                     src={PizzaBan1}
                     alt="about image"
                     className="about__img"
                     variants={slideInRight}
                     initial="hidden"
                     animate="visible"
                  />
               </div>
            </section>

            <section className="popular section" id="popular">
               <span className="section__subtitle">The Best Food</span>
               <h2 className="section__title">Popular Pizza</h2>

               <div className="popular__container container grid">
                  <motion.div
                     className="popular__card"
                     variants={slideInLeft}
                     initial="hidden"
                     animate="visible"
                  >
                     <img src={PizzaBan3} alt="popular image" className="popular__img" />
                     <div className="popular__content">
                        <NavLink className="popular__button" to="/menu">
                           Order
                           <svg
                              width={36}
                              height={16}
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M16.546 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49a.996.996 0 0 0-.87-1.48h-14.8l-.94-2h-3.27v2h2l3.6 7.59-1.35 2.44c-.73 1.34.23 2.97 1.75 2.97h12v-2h-12l1.1-2h7.45Zm-9.39-7h12.15l-2.76 5h-7.02l-2.37-5Zm.84 12c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Z" />
                           </svg>
                        </NavLink>
                        <h3 className="popular__name">Mozzarella</h3>
                        <p className="popular__description">
                           A classic pizza with tomato sauce, fresh mozzarella, and basil.
                        </p>
                        <p className="popular__price">₱110.19</p>
                     </div>
                  </motion.div>

                  <motion.div
                     className="popular__card"
                     variants={slideInRight}
                     initial="hidden"
                     animate="visible"
                  >
                     <img src={PizzaBan2} alt="popular image" className="popular__img" />
                     <div className="popular__content">
                        <NavLink className="popular__button" to="/menu">
                           Order
                           <svg
                              width={36}
                              height={16}
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M16.546 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49a.996.996 0 0 0-.87-1.48h-14.8l-.94-2h-3.27v2h2l3.6 7.59-1.35 2.44c-.73 1.34.23 2.97 1.75 2.97h12v-2h-12l1.1-2h7.45Zm-9.39-7h12.15l-2.76 5h-7.02l-2.37-5Zm.84 12c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Z" />
                           </svg>
                        </NavLink>
                        <h3 className="popular__name">Pepperoni</h3>
                        <p className="popular__description">
                           A traditional pizza topped with tomato sauce, mozzarella cheese.
                        </p>
                        <p className="popular__price">₱118.00</p>
                     </div>
                  </motion.div>

                  <motion.div
                     className="popular__card"
                     variants={slideInLeft}
                     initial="hidden"
                     animate="visible"
                  >
                     <img src={PizzaBan4} alt="popular image" className="popular__img" />
                     <div className="popular__content">
                        <NavLink className="popular__button" to="/menu">
                           Order
                           <svg
                              width={36}
                              height={16}
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M16.546 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49a.996.996 0 0 0-.87-1.48h-14.8l-.94-2h-3.27v2h2l3.6 7.59-1.35 2.44c-.73 1.34.23 2.97 1.75 2.97h12v-2h-12l1.1-2h7.45Zm-9.39-7h12.15l-2.76 5h-7.02l-2.37-5Zm.84 12c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Z" />
                           </svg>
                        </NavLink>
                        <h3 className="popular__name">Meat Lovers</h3>
                        <p className="popular__description">
                           A hearty pizza topped with tomato sauce, mozzarella cheese, pepperoni.
                        </p>
                        <p className="popular__price">$17.99</p>
                     </div>
                  </motion.div>
               </div>
            </section>

            <section className="recently section" id="recently">
               <div className="recently__container container grid">
                  <motion.div
                     className="recently__data"
                     variants={slideInLeft}
                     initial="hidden"
                     animate="visible"
                  >
                     <span className="section__subtitle">Recently Added</span>
                     <h2 className="section__title">
                        California <br />
                        Pizza
                     </h2>
                     <p className="recently__description">
                        Check out what&#39;s new and don&#39;t miss out on the opportunity to treat
                        yourself to a delicious meal. Indulge in the experience and savor every
                        bite.
                     </p>
                     <NavLink className="button" to="/menu">
                        Order Now
                        <svg
                           width={26}
                           height={26}
                           fill="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z" />
                        </svg>
                     </NavLink>
                  </motion.div>
                  <motion.img
                     src={California}
                     alt="recently image"
                     className="about__img"
                     variants={slideInRight}
                     initial="hidden"
                     animate="visible"
                  />
               </div>
            </section>

            <section className="newsletter section">
               <div className="newsletter__container container grid">
                  <motion.img
                     src={PizzaBan5}
                     alt="newsletter image"
                     className="newsletter__img"
                     variants={slideInLeft}
                     initial="hidden"
                     animate="visible"
                  />
                  <motion.div
                     className="newsletter__data"
                     variants={slideInRight}
                     initial="hidden"
                     animate="visible"
                  >
                     <span className="section__subtitle">Newsletter</span>
                     <h2 className="section__title">
                        Subscribe for <br />
                        exclusive offers
                     </h2>
                     <form action="" className="newsletter__form">
                        <input
                           type="email"
                           placeholder="Enter email"
                           className="newsletter__input"
                        />
                        <NavLink className="newsletter__button" to="/contact">
                           Subscribe Now
                        </NavLink>
                     </form>
                  </motion.div>
               </div>
            </section>
         </div>
         {/*          <!--~~~~~~~~~~~~~~~ FOOTER ~~~~~~~~~~~~~~~-->*/}
         <Footer />
      </>
   );
}

export default Home;

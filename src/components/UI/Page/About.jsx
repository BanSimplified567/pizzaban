import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AboutPizzaBan from '../../img/ServicePizza/DeliverPizza.jpg';
import AboutPizzaBan1 from '../../img/ServicePizza/PaymentPizzaQRCode.jpg';
import AboutPizzaBan2 from '../../img/ServicePizza/pizzaHandsShare.jpg';
import AboutPizzaBan4 from '../../img/ServicePizza/PaymentPizzaQRCode.jpg'; // Example for unique import

import Footer from './Extra/Footer';
import './Style/About.css';

function About() {
   // Animation variants
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
         <div className="container section about">
            <article className="container">
               <motion.div
                  className="home__data"
                  variants={slideInRight}
                  initial="hidden"
                  animate="visible"
               >
                  <section className="aboutContainer">
                     <h2 className="home__title">About us</h2>
                     <h3 className="section__title">More than delicious food</h3>
                     <p className="about__description">
                        Founded in 1982, we bring pizza slice by slice to the next level! Unique
                        branding and being in the pizza industry is the formula to our success. We
                        understand what people want and convert desires to unique taste experiences.
                        Freshness, originality, and quality are only a small part of our priorities.
                        Affordable costs, located almost anywhere you go, amazing online ordering
                        system, easy pre-order options, and fantastic options for corporate parties!
                        At Pizza Time, we care about you because you are what makes us special! The
                        Pizza Time project was made with love for pizza by Ekaterine Mitagvaria.
                     </p>
                  </section>
               </motion.div>
               <section className="images">
                  <motion.img
                     src={AboutPizzaBan}
                     alt=""
                     className="aboutPizzaBanImage"
                     variants={slideInLeft}
                     initial="hidden"
                     animate="visible"
                  />
                  <motion.img
                     src={AboutPizzaBan1}
                     alt=""
                     className="aboutPizzaBanImage"
                     variants={slideInRight}
                     initial="hidden"
                     animate="visible"
                  />
                  <motion.img
                     src={AboutPizzaBan2}
                     alt=""
                     className="aboutPizzaBanImage"
                     variants={slideInLeft}
                     initial="hidden"
                     animate="visible"
                  />
               </section>
            </article>

            <article className="about-customers">
               <section className="images1">
                  <motion.img
                     src={AboutPizzaBan}
                     alt=""
                     className="aboutPizzaBanImage1"
                     variants={slideInLeft}
                     initial="hidden"
                     animate="visible"
                  />
                  <motion.img
                     src={AboutPizzaBan1}
                     alt=""
                     className="aboutPizzaBanImage1"
                     variants={slideInRight}
                     initial="hidden"
                     animate="visible"
                  />
                  <motion.img
                     src={AboutPizzaBan2}
                     alt=""
                     className="aboutPizzaBanImage1"
                     variants={slideInLeft}
                     initial="hidden"
                     animate="visible"
                  />
               </section>
               <motion.div
                  className="home__data"
                  variants={slideInRight}
                  initial="hidden"
                  animate="visible"
               >
                  <section className="section">
                     <h2 className="home__title">Happy Customers</h2>
                     <h3 className="section__title">Over 16000 positive feedback</h3>
                     <p className="about__description">
                        We believe that our success is due to our commitment to providing
                        high-quality food and exceptional service. Our menu features a wide range of
                        delicious pizzas, salads, sandwiches, pasta dishes, and more, all made with
                        fresh, locally sourced ingredients. We take great care to ensure that each
                        dish is prepared with the utmost attention to detail, so that every bite is
                        as delicious as the last. We also understand that great food is only part of
                        the equation. That's why we place a strong emphasis on delivering
                        exceptional service to every customer who walks through our doors. Our team
                        of dedicated staff members is committed to providing a warm, welcoming
                        atmosphere that makes every guest feel like they are part of the family.
                     </p>
                  </section>
               </motion.div>
            </article>
            <article className="about-careers">
               <section className="section">
                  <h2 className="home__title">Careers</h2>
                  <h3 className="section__title">Join the team</h3>
                  <p className="about__description">
                     Are you passionate about great food, exceptional customer service, and working
                     with a fun and dynamic team? If so, we would love to have you join our team at
                     Pizza Time! We are always on the lookout for talented and motivated individuals
                     to join our team in a variety of roles, from servers and chefs to kitchen staff
                     and management. Whether you're just starting out in the foodservice industry or
                     have years of experience under your belt, we offer a supportive and
                     collaborative work environment that encourages personal and professional
                     growth.
                  </p>
                  <Link className="popular__button" to="/contact">
                     Join now
                  </Link>
               </section>
               <motion.img
                  src={AboutPizzaBan4}
                  alt=""
                  className="aboutPizzaBanImage1"
                  variants={slideInRight}
                  initial="hidden"
                  animate="visible"
               />
            </article>

            <article className="about-collaboration container">
               <motion.img
                  src={AboutPizzaBan1}
                  alt=""
                  className="aboutPizzaBanImage1"
                  variants={slideInLeft}
                  initial="hidden"
                  animate="visible"
               />
               <motion.div
                  className="home__data"
                  variants={slideInRight}
                  initial="hidden"
                  animate="visible"
               >
                  <section className="section">
                     <h2 className="home__title">Collaboration</h2>
                     <h3 className="section__title">Join the business</h3>
                     <p className="about__description">
                        Whether it's catering for a corporate event, providing lunch for a business
                        meeting, or simply offering a delicious meal for employees to enjoy, we are
                        committed to meeting the unique needs of businesses in our area. Our menu
                        features a wide range of options, from classic pizzas and salads to
                        sandwiches and pasta dishes, so you can be sure there's something for
                        everyone to enjoy. Don't forget, Pizza Time is a fictional pizza restaurant
                        made by Ekaterine Mitagvaria.
                     </p>
                     <Link className="popular__button" to="/contact">
                        Request a call
                     </Link>
                  </section>
               </motion.div>
            </article>
            <motion.div
               className="home__data"
               variants={slideInLeft}
               initial="hidden"
               animate="visible"
            >
               <article className="about-careers">
                  <section className="section">
                     <h2 className="home__title">PizzaBan</h2>
                     <h3 className="section__title">Location</h3>
                     <p className="about__description">
                        Embark on a culinary journey to Poblacion Plaza in Sibonga, Cebu,
                        Philippines, where the aroma of our irresistible pizza beckons. Nestled in
                        the heart of this vibrant locale, our eatery awaits your arrival. Join us
                        and savor the legendary taste of our undeniably delicious pizza. See you
                        there!
                     </p>
                     <Link className="popular__button" to="/contact">
                        Go now
                     </Link>
                  </section>
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.9932830919042!2d123.61783677419692!3d10.01741227273658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33abd0abb548c185%3A0x5fc026dad886bffd!2sSibonga%20Plaza%2C%20Sibonga%2C%206020%20Cebu!5e0!3m2!1sen!2sph!4v1714309015772!5m2!1sen!2sph"
                     width="600"
                     height="450"
                     loading="lazy"
                  ></iframe>
               </article>
            </motion.div>
         </div>

         <Footer />
      </>
   );
}

export default About;

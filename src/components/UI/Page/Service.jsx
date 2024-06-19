import { motion } from 'framer-motion';
import PizzaPeople from '../../img/ServicePizza/istockphoto-1193362940-612x612.jpg';
import PizzaBanFamily from '../../img/ServicePizza/FamilyEatingPizza.jpg';
import PizzaBanNight from '../../img/ServicePizza/NightEatingPizza.jpg';
import PizzaBanOffice from '../../img/ServicePizza/officeEatingPizza.jpg';
import PizzaBanConstructionWorker from '../../img/ServicePizza/constructionWorkers.jpg';
import PizzaBanPicNic from '../../img/ServicePizza/PizzaBanPicNic.jpg';
import PizzaBanCoupleEating from '../../img/ServicePizza/coupleEatingPizza.jpg';
import PizzaBanEatingPainting from '../../img/ServicePizza/PizzaPaintingWhileEating.jpg';
import PizzaBanWorker from '../../img/ServicePizza/workerHoldingPizza.jpg';
import PizzaBanMade from '../../img/ServicePizza/pizzaMade.jpg';

import './Style/Service.css';
import Footer from './Extra/Footer';

const sectionVariants = {
   hidden: { x: '-100vw', opacity: 0 },
   visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 50 } },
   exit: { x: '100vw', opacity: 0, transition: { type: 'spring', stiffness: 50 } },
};

// Animation variants
const slideInLeft = {
   hidden: { y: '-100vw' },
   visible: { y: 0, transition: { type: 'spring', stiffness: 50 } },
};

const slideInRight = {
   hidden: { y: '100vw' },
   visible: { y: 0, transition: { type: 'spring', stiffness: 50 } },
};

function Service() {
   console.log('Service');
   return (
      <>
         <div className="service-ContainerMain">
            <motion.section
               className="serviceContainer container section"
               variants={slideInRight}
               initial="hidden"
               animate="visible"
            >
               <div className="serviceDescription">
                  <p className="section__subtitle">Welcome To</p>
                  <h1 className="home__title"> PizzaBan Service</h1>
                  <p className="home__description">
                     Introducing PizzaBan: Where Flavor Meets Fun! Dive into a world of
                     deliciousness with our mouthwatering pizzas crafted with care. From classic
                     favorites to inventive specialties, there&#39;s something for everyone at
                     PizzaBan. Join us for a slice of happiness today!
                  </p>
               </div>
               <img className="servicPizzaPeople" src={PizzaPeople} alt="PizzaPeople" />
            </motion.section>

            <section className="servicePizzaEating section">
               <h1 className="service__title">Where Every Bite Tells a Story</h1>
               <div className="serviceWrapper">
                  <motion.div
                     className="serviceCard"
                     variants={slideInRight}
                     initial="hidden"
                     animate="visible"
                  >
                     <div className="serviceFace serviceFront">
                        <img
                           className="servicePizzaBan"
                           src={PizzaBanEatingPainting}
                           alt="PizzaBanEatingPainting"
                        />

                        <h1 className="text-h1">Painting</h1>
                     </div>

                     <div className="serviceFace serviceBack">
                        <h2 className="section__title">Painting</h2>
                        <p className="home__description">
                           Begin your morning on a peaceful note, savoring pizza on your balcony as
                           the sun rises. Enjoy the quiet tranquility and delicious flavors in the
                           fresh morning air.
                        </p>
                        <div className="serviceLinks">
                           <a className="serviceLink-a" href="#">
                              Details
                           </a>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div
                     className="serviceCard"
                     variants={slideInLeft}
                     initial="hidden"
                     animate="visible"
                  >
                     <div className="serviceFace serviceFront">
                        <img
                           className="servicePizzaBan"
                           src={PizzaBanCoupleEating}
                           alt="PizzaBanCoupleEating"
                        />
                        <h1 className="text-h1">Couple</h1>
                     </div>

                     <div className="serviceFace serviceBack">
                        <h2 className="section__title">Couple</h2>
                        <p className="home__description">
                           Savor a cozy night in with your partner, sharing a delicious pizza. Each
                           bite brings you closer, blending the flavors of love and comfort in a
                           simple yet satisfying meal together.
                        </p>
                        <div className="serviceLinks">
                           <a className="serviceLink-a" href="#">
                              Details
                           </a>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div
                     className="serviceCard"
                     variants={slideInRight}
                     initial="hidden"
                     animate="visible"
                  >
                     <div className="serviceFace serviceFront">
                        <img className="servicePizzaBan" src={PizzaBanNight} alt="PizzaBanNight" />
                        <h1 className="text-h1">NightTalks</h1>
                     </div>

                     <div className="serviceFace serviceBack">
                        <h2 className="section__title">NightTalks</h2>
                        <p className="home__description">
                           Gather with your friend for a chill night of pizza and heartfelt
                           conversation. As you enjoy each slice, the bond between you grows
                           stronger, blending the flavors of friendship and comfort into a perfect
                           evening together.
                        </p>
                        <div className="serviceLinks">
                           <a className="serviceLink-a" href="#">
                              Details
                           </a>
                        </div>
                     </div>
                  </motion.div>
                  <motion.div
                     className="serviceCard"
                     variants={slideInRight}
                     initial="hidden"
                     animate="visible"
                  >
                     <div className="serviceFace serviceFront">
                        <img
                           className="servicePizzaBan"
                           src={PizzaBanConstructionWorker}
                           alt="PizzaBanConstructionWorker"
                        />

                        <h1 className="text-h1">Workers</h1>
                     </div>

                     <div className="serviceFace serviceBack">
                        <h2 className="section__title">Workers</h2>
                        <p className="home__description">
                           Fuel up with your coworkers at the construction site, sharing pizza and
                           stories during a well-deserved break. In between bites, bonds strengthen,
                           turning a simple meal into a moment of camaraderie amidst the hustle and
                           bustle.
                        </p>
                        <div className="serviceLinks">
                           <a className="serviceLink-a" href="#">
                              Details
                           </a>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div
                     variants={slideInLeft}
                     initial="hidden"
                     animate="visible"
                     className="serviceCard"
                  >
                     <div className="serviceFace serviceFront">
                        <img
                           className="servicePizzaBan"
                           src={PizzaBanOffice}
                           alt="PizzaBanOffice"
                        />
                        <h1 className="text-h1">Office</h1>
                     </div>

                     <div className="serviceFace serviceBack">
                        <h2 className="section__title">Office</h2>
                        <p className="home__description">
                           Liven up the office lunch break with pizza shared among coworkers. In the
                           midst of workday chaos, laughter and camaraderie bloom, transforming a
                           simple meal into a cherished moment of connection and rejuvenation.
                        </p>
                        <div className="serviceLinks">
                           <a className="serviceLink-a" href="#">
                              Details
                           </a>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div
                     className="serviceCard"
                     variants={slideInRight}
                     initial="hidden"
                     animate="visible"
                  >
                     <div className="serviceFace serviceFront">
                        <img className="servicePizzaBan" src={PizzaBanPicNic} alt="PizzaBanNight" />
                        <h1 className="text-h1">Picnic</h1>
                     </div>

                     <div className="serviceFace serviceBack">
                        <h2 className="section__title">Picnic</h2>
                        <p className="home__description">
                           Gather your loved ones for a pizza picnic in the park. As laughter fills
                           the air, slices are shared among family, friends, and even coworkers,
                           creating cherished memories of togetherness under the sun.
                        </p>
                        <div className="serviceLinks">
                           <a className="serviceLink-a" href="#">
                              Details
                           </a>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </section>

            <motion.section
               className="serviceContainer container section"
               initial="hidden"
               animate="visible"
               variants={slideInRight}
            >
               <img className="servicPizzaPeople" src={PizzaBanFamily} alt="PizzaBanFamily" />
               <div>
                  <h1 className="section__title">There’s no such thing as bad pizza.</h1>
                  <p className="home__description">
                     At PizzaBan, we believe that every bite is a moment to savor and cherish. Our
                     delicious pizzas not only satisfy your cravings but also lighten your mood and
                     strengthen family bonds. Sharing a meal together at PizzaBan sparks joy and
                     creates lasting memories, making every gathering a special occasion. Come
                     indulge in our irresistible pizzas and experience the magic of togetherness
                     with PizzaBan!
                  </p>
               </div>
            </motion.section>

            <motion.section
               className="serviceContainer container section"
               initial="hidden"
               animate="visible"
               exit="exit"
               variants={sectionVariants}
            >
               <div className="container">
                  <h1 className="home__title"> Temptation in Every Bite</h1>
                  <p className="home__description">
                     At PizzaBan, we believe that every bite is a moment to savor and cherish. Our
                     delicious pizzas not only satisfy your cravings but also lighten your mood and
                     strengthen family bonds. Sharing a meal together at PizzaBan sparks joy and
                     creates lasting memories, making every gathering a special occasion. Come
                     indulge in our irresistible pizzas and experience the magic of togetherness
                     with PizzaBan!
                  </p>
               </div>
               <img className="servicPizzaPeople" src={PizzaBanWorker} alt="PizzaBanWorker" />
            </motion.section>

            <motion.section
               className="serviceContainer container section"
               initial="hidden"
               animate="visible"
               variants={slideInRight}
            >
               <img className="servicPizzaPeople" src={PizzaBanMade} alt="PizzaBanFamily" />
               <div>
                  <h1 className="section__title">Half a Century of Flavorful Feasts</h1>
                  <p className="home__description">
                     For half a century, PizzaBan has been synonymous with delicious, clean, and
                     healthy pizza. From our humble beginnings, we&#39;ve prioritized quality
                     ingredients and stringent cleanliness standards. As we celebrate our milestone,
                     we remain committed to perfecting our craft and serving up pizzas that not only
                     satisfy cravings but also promote wellness. Join us as we continue our journey
                     of pizza perfection for generations to come.
                  </p>
               </div>
            </motion.section>
         </div>

         <Footer />
      </>
   );
}

export default Service;

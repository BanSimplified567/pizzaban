import { NavLink } from 'react-router-dom';
import PizzaBan6 from '../../../img/logo.png';

function Footer() {
   return (
      <>
         <footer className="footer" id="contactUs">
            <div className="footer__container container grid">
               <div>
                  <NavLink to="/">
                     <img src={PizzaBan6} alt="LogoName" className="home__img" />
                     <h1 className="nav__logo">PizzaBan</h1>
                  </NavLink>

                  <p className="footer__description">
                     Food for the body is not <br />
                     enough. There must be food <br />
                     for the soul.
                  </p>
               </div>

               <div className="footer__content">
                  <div>
                     <h3 className="footer__title">Main Menu</h3>

                     <ul className="footer__links">
                        <li className="footer__social">
                           <NavLink to="/about" className="footer__button">
                              About
                           </NavLink>
                           <NavLink to="/menu" className="footer__button">
                              Menu
                           </NavLink>
                           <NavLink to="/service" className="footer__button">
                              Offer
                           </NavLink>
                           <NavLink to="/service" className="footer__button">
                              Events
                           </NavLink>
                        </li>
                     </ul>
                  </div>

                  <div>
                     <h3 className="footer__title">Information</h3>

                     <ul className="footer__links">
                        <li className="footer__social">
                           <NavLink to="/contact" className="footer__button">
                              Contact: 09551929404
                           </NavLink>
                           <NavLink to="/menu" className="footer__button">
                              Order & Returns : 09460945946
                           </NavLink>
                           <NavLink to="/service" className="footer__button">
                              Videos
                           </NavLink>
                           <NavLink to="/service" className="footer__button">
                              Reservation
                           </NavLink>
                        </li>
                     </ul>
                  </div>

                  <div>
                     <h6 className="footer__title">Address</h6>
                     <ul className="footer__links">
                        <NavLink to="/contact">
                           <li className="footer__information footer__button">Sibonga Plaza</li>
                           <li className="footer__information footer__button">9AM - 11PM</li>
                        </NavLink>
                     </ul>
                  </div>

                  <div>
                     <h2 className="footer__title">Social Media</h2>
                     <ul className="footer__links footer__social">
                        <NavLink
                           to="https://web.facebook.com/him.blacklion567"
                           className="footer__button"
                        >
                           <svg
                              width={46}
                              height={46}
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                           </svg>
                        </NavLink>
                        <NavLink
                           to="https://www.instagram.com/nocodearea/"
                           className="footer__button"
                        >
                           <svg
                              width={46}
                              height={46}
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <path d="M17.5 6.5h.01" />
                           </svg>
                        </NavLink>
                        <NavLink to="https://twitter.com/JBringcola" className="footer__button">
                           <svg
                              width={46}
                              height={46}
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0 0 23 3Z" />
                           </svg>
                        </NavLink>
                     </ul>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
}

export default Footer;

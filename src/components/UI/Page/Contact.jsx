import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import specific icons
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Style/Contact.css'; // Import CSS file

function Contact() {
   return (
      <motion.div
         className="contact-container"
         initial={{ x: '-100vw' }}
         animate={{ x: 0 }}
         transition={{ type: 'spring', stiffness: 50 }}
      >
         <span className="contact-big-circle"></span>
         <img src="img/shape.png" className="contact-square" alt="" />
         <div className="form">
            <ContactInfo />
            <ContactForm />
         </div>
      </motion.div>
   );
}

function ContactInfo() {
   return (
      <div className="contact-info">
         <h3 className="contact-title">Let&#39;s get in touch</h3>
         <p className="contact-text">
            &#34;Welcome to Pizzaban! Get ready for delicious slices and unforgettable flavors.
            We&#39;re thrilled to have you here!&#34;
         </p>
         <div className="contact-info">
            <div className="contact-information">
               <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp; &nbsp;
               <p>Poblacion, Sibonga, Cebu, Sibonga, PH</p>
            </div>
            <div className="contact-information">
               <FontAwesomeIcon icon={faEnvelope} /> &nbsp; &nbsp;
               <p>naviedaj567@gmail.com</p>
            </div>
            <div className="contact-information">
               <FontAwesomeIcon icon={faPhone} /> &nbsp; &nbsp;
               <p>+639338188766</p>
            </div>
         </div>
         <div className="contact-social-media">
            <p>Connect with us :</p>
            <div className="contact-social-icons">
               <Link to="https://web.facebook.com/him.blacklion567" className="contact-social">
                  <FontAwesomeIcon icon={faFacebookF} />
               </Link>
               <Link to="https://www.instagram.com/nocodearea/dd" className="contact-social">
                  <FontAwesomeIcon icon={faInstagram} />
               </Link>
               <Link
                  to="https://www.linkedin.com/in/jade-ivan-bringcola-bb9466272/"
                  className="contact-social"
               >
                  <FontAwesomeIcon icon={faLinkedinIn} />
               </Link>
            </div>
         </div>
      </div>
   );
}

function ContactForm() {
   return (
      <div className="contact-form">
         <span className="contact-circle one"></span>
         <span className="contact-circle two"></span>
         <form action="index.html" autoComplete="off" className="contact-formInput">
            <h3 className="contact-title">Contact us</h3>
            <div className="contact-input-container">
               <input type="text" name="name" className="contact-input" placeholder="Username" />
            </div>
            <div className="contact-input-container">
               <input type="email" name="email" className="contact-input" placeholder="Email" />
            </div>
            <div className="contact-input-container">
               <input
                  type="tel"
                  name="phone"
                  className="contact-input"
                  placeholder="Contact Number"
               />
            </div>
            <div className="contact-input-container textarea">
               <textarea name="message" className="contact-input" placeholder="Message"></textarea>
            </div>
            <a className="contact-btn" href="https://www.facebook.com/him.blacklion567/">
               Send
            </a>
         </form>
      </div>
   );
}

export default Contact;

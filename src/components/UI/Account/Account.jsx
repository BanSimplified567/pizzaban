import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Account.css';

function AccountCreate() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [fname, setFname] = useState('');
   const [lname, setLname] = useState('');

   const navigate = useNavigate();

   useEffect(() => {
      const signUpButton = document.getElementById('signUp');
      const signInButton = document.getElementById('signIn');
      const container = document.getElementById('account-container');

      const handleSignUpClick = () => {
         container.classList.add('account-right-panel-active');
      };

      const handleSignInClick = () => {
         container.classList.remove('account-right-panel-active');
      };

      signUpButton.addEventListener('click', handleSignUpClick);
      signInButton.addEventListener('click', handleSignInClick);

      return () => {
         signUpButton.removeEventListener('click', handleSignUpClick);
         signInButton.removeEventListener('click', handleSignInClick);
      };
   }, []);

   const handleSignUp = (e) => {
      e.preventDefault();
      const user = {
         fname,
         lname,
         email,
         password,
      };

      if (fname && lname && email && password) {
         sessionStorage.setItem('user', JSON.stringify(user));
         alert('Account created successfully!');
         const container = document.getElementById('account-container');
         container.classList.remove('account-right-panel-active');
      } else {
         alert('Please fill in all fields');
      }
   };

   const handleSignIn = (e) => {
      e.preventDefault();
      const user = JSON.parse(sessionStorage.getItem('user'));

      if (user && user.email === email && user.password === password) {
         alert('Login successful!');
         navigate('/');
      } else {
         alert("Account doesn't exist or incorrect credentials");
      }
   };

   return (
      <div className="account-container container" id="account-container">
         <div className="account-form-container account-sign-up-container">
            <form className="account-information" onSubmit={handleSignUp}>
               <h1 className="account-h1">Create Account</h1>
               <div className="account-social-container">
                  <Link to="https://web.facebook.com/him.blacklion567" className="account-social">
                     <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                  <Link to="https://www.instagram.com/nocodearea/" className="account-social">
                     <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link
                     to="https://www.linkedin.com/in/jade-ivan-bringcola-bb9466272/"
                     className="account-social"
                  >
                     <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
               </div>
               <span className="account-span">or use your email for registration</span>
               <input
                  className="account-input"
                  type="text"
                  placeholder="First Name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
               />
               <input
                  className="account-input"
                  type="text"
                  placeholder="Last Name"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
               />
               <input
                  className="account-input"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input
                  className="account-input"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button className="account-button">Sign Up</button>
            </form>
         </div>
         <div className="account-form-container account-sign-in-container">
            <form className="account-information" onSubmit={handleSignIn}>
               <h1 className="account-h1">Sign In</h1>
               <div className="account-social-container">
                  <Link to="https://web.facebook.com/him.blacklion567" className="account-social">
                     <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                  <Link to="https://www.instagram.com/nocodearea/dd" className="account-social">
                     <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link
                     to="https://www.linkedin.com/in/jade-ivan-bringcola-bb9466272/"
                     className="account-social"
                  >
                     <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
               </div>
               <span className="account-span">or use your account</span>
               <input
                  className="account-input"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input
                  className="account-input"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <Link to="/contact" className="account-forgot">
                  Forgot your password?
               </Link>
               <button className="account-button">Sign In</button>
            </form>
         </div>
         <div className="account-overlay-container">
            <div className="account-overlay">
               <div className="account-overlay-panel account-overlay-left">
                  <h1 className="account-h1">Welcome Back!</h1>
                  <p className="account-p">
                     To keep connected with us please login with your personal info
                  </p>
                  <button className="account-button-ghost" id="signIn">
                     Sign In
                  </button>
               </div>
               <div className="account-overlay-panel account-overlay-right">
                  <h1 className="account-h1">Hello, Friend!</h1>
                  <p className="account-p">
                     Enter your personal details and start your journey with us
                  </p>
                  <button className="account-button-ghost" id="signUp">
                     Sign Up
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default AccountCreate;

import {
   faIceCream,
   faIcons,
   faCoffee,
   faBaby,
   faCake,
   faHamburger,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Footer.css';

function Footer() {
   return (
      <>
         <div className="footer-container">
            <section className="footer-subscription">
               <p className="footer-subscription-heading">
                  Join the Adventure newsletter to receive our best vacation
                  deals
               </p>
               <p className="footer-subscription-text">
                  You can unsubscribe at any time.
               </p>
               <div className="input-areas">
                  <form>
                     <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="footer-input"
                     />
                     <Button buttonStyle="btn--outline">Subcribe</Button>
                  </form>
               </div>
            </section>
            <div className="footer-links">
               <div className="footer-link-wrapper">
                  <div className="footer-link-items">
                     <h2>About us</h2>
                     <Link to="/sign-up">How it works</Link>
                     <Link to="/">Testimonials</Link>
                     <Link to="/">Careers</Link>
                     <Link to="/">Investors</Link>
                     <Link to="/">Terms of Service</Link>
                  </div>
                  <div className="footer-link-items">
                     <h2>About us</h2>
                     <Link to="/sign-up">How it works</Link>
                     <Link to="/">Testimonials</Link>
                     <Link to="/">Careers</Link>
                     <Link to="/">Investors</Link>
                     <Link to="/">Terms of Service</Link>
                  </div>
               </div>
               <div className="footer-link-wrapper">
                  <div className="footer-link-items">
                     <h2>About us</h2>
                     <Link to="/sign-up">How it works</Link>
                     <Link to="/">Testimonials</Link>
                     <Link to="/">Careers</Link>
                     <Link to="/">Investors</Link>
                     <Link to="/">Terms of Service</Link>
                  </div>
                  <div className="footer-link-items">
                     <h2>About us</h2>
                     <Link to="/sign-up">How it works</Link>
                     <Link to="/">Testimonials</Link>
                     <Link to="/">Careers</Link>
                     <Link to="/">Investors</Link>
                     <Link to="/">Terms of Service</Link>
                  </div>
               </div>
            </div>
            <section className="social-media">
               <div className="social-media-wrap">
                  <div className="footer-logo">
                     <Link to="/" className="social-logo">
                        TRVL <FontAwesomeIcon icon={faCoffee} />
                     </Link>
                  </div>
                  <small className="website-rights">TRVL @ 2023</small>
                  <div className="social-icons">
                     <Link
                        className="social-icon-link facebook"
                        to="/"
                        target="_blank"
                        aria-label="Facebook"
                     >
                        <FontAwesomeIcon icon={faIcons} />
                     </Link>
                     <Link
                        className="social-icon-link instagram"
                        to="/"
                        target="_blank"
                        aria-label="Instagram"
                     >
                        <FontAwesomeIcon icon={faIceCream} />
                     </Link>
                     <Link
                        className="social-icon-link youtube"
                        to="/"
                        target="_blank"
                        aria-label="Youtube"
                     >
                        <FontAwesomeIcon icon={faBaby} />
                     </Link>
                     <Link
                        className="social-icon-link twitter"
                        to="/"
                        target="_blank"
                        aria-label="Twitter"
                     >
                        <FontAwesomeIcon icon={faCake} />
                     </Link>
                     <Link
                        className="social-icon-link linkedin"
                        to="/"
                        target="_blank"
                        aria-label="Linkedin"
                     >
                        <FontAwesomeIcon icon={faHamburger} />
                     </Link>
                  </div>
               </div>
            </section>
         </div>
      </>
   );
}

export default Footer;

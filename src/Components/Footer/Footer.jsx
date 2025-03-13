import React from "react";
import './Footer.css'
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaTiktok, FaLinkedin, } from "react-icons/fa";
import logo from '../../Assets/mmb-logo.png'

const Footer = () => {
    return (
      <footer className="footer">
        <hr className="footer-separator" />
        <div className="footer-container container">
          <div className="footer-column">
            <h2 className="footer-title"><img src={logo} alt="" className="logo"/></h2>
            <p>At MMB's Hygienic Socks, we believe in innovation and sustainability</p>
            <div className="footer-info">
              <FaEnvelope /> <span>info@info.com</span>
            </div>
            <div className="footer-info">
              <FaPhone /> <span>+233123456789</span>
            </div>
          </div>
          <div className="footer-column">
            <h3>About</h3>
            <p>Company</p>
            <p>Products</p>
            <p>Our Commitment</p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <p>Follow us on Social Media</p>
            <div className="social-icons">
            <a href="https://web.facebook.com/profile.php?id=61573529680923" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/mmb_hygienic_socks/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@mmb_hygienic_socks?lang=en" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://www.linkedin.com/in/mmb-hygienic-socks-10a1b3353/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
          </div>
        </div>
        <p className="footer-rights">© All rights reserved. 2025</p>
      </footer>
    );
  };
  
  
  export default Footer;
  
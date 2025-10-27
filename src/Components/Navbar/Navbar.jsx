import React, { useEffect, useState } from "react";
import './Navbar.css';
import logo from '../../Assets/mmb-logo.png';
import menu_icon from '../../Assets/menu-icon.png';
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenu(!mobileMenu);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to="hero" smooth duration={500} offset={0}
            spy hashSpy isDynamic activeClass="active"
            onClick={() => setMobileMenu(false)}
          >
            Home <span></span>
          </Link>
        </li>
        <li>
          <Link to="about" smooth duration={500} offset={-50}
            spy hashSpy isDynamic activeClass="active"
            onClick={() => setMobileMenu(false)}
          >
            About <span></span>
          </Link>
        </li>
        <li>
          <Link to="innovator" smooth duration={500} offset={-150}
            spy hashSpy isDynamic activeClass="active"
            onClick={() => setMobileMenu(false)}
          >
            Innovator <span></span>
          </Link>
        </li>
        <li>
          <Link to="products" smooth duration={500} offset={-100}
            spy hashSpy isDynamic activeClass="active"
            onClick={() => setMobileMenu(false)}
          >
            Products <span></span>
          </Link>
        </li>
        <li>
          {/* Make Contact a link so it can get .active too */}
          <Link to="contact" smooth duration={500} offset={-250}
            spy hashSpy isDynamic activeClass="active"
            onClick={() => setMobileMenu(false)}
            className="btn btn-link"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import './Navbar.css';
import logo from '../../Assets/mmb-logo.png';
import menu_icon from '../../Assets/menu-icon.png';
import { Link } from "react-scroll";

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMobileMenu(!mobileMenu);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="Logo" className="logo" />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li>
                    <Link to='hero' smooth={true} offset={0} duration={500} activeClass="active" onClick={() => setMobileMenu(false)}>
                        Home <span></span>
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} offset={-50} duration={500} activeClass="active" onClick={() => setMobileMenu(false)}>
                        About <span></span>
                    </Link>
                </li>
                <li>
                    <Link to='innovator' smooth={true} offset={-150} duration={500} activeClass="active" onClick={() => setMobileMenu(false)}>
                        Innovator <span></span>
                    </Link>
                </li>
                <li>
                    <Link to='products' smooth={true} offset={-100} duration={500} activeClass="active" onClick={() => setMobileMenu(false)}>
                        Products <span></span>
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} offset={-250} duration={500} activeClass="active" onClick={() => setMobileMenu(false)}>
                        <button className="btn">Contact Us</button> <span></span>
                    </Link>
                </li>
            </ul>
            <img src={menu_icon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
        </nav>
    );
}

export default Navbar;

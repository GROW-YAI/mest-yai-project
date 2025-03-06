import React, { useEffect, useState } from "react";
import './Navbar.css'
import logo from '../../Assets/mmb-logo.png'

const Navbar = ()=>{

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY >500? setSticky(true) : setSticky(false);
        })
    }, []);

    return(
        <nav className={`container ${sticky? 'dark nav': ''}`}>
            <img src={logo} alt="" className="logo"/>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#company">Company</a></li>
                <li><a href="#services">Services</a></li>
                <li><button className="btn"><a href="#contact">Contact</a></button></li>
            </ul>
        </nav>
    )
}

export default Navbar;
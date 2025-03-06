import React from "react";
import './Hero.css'
import dark_arrow from '../../Assets/dark-arrow.png'

const Hero = () =>{
    return(
        <div className="hero container">
            <div className="hero-text">
                <h1>Step into Comfort & Freshness - Naturally!</h1>
                <p>Discover the power of bamboo socks - designed to treat foot rot, keep your feet dry, and provide unmatched comfort. Pair it with our pure citronella oil, the natural solution for eliminating foot odor. Experience freshness, healing, and sustainability with every step.</p>
                <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero;
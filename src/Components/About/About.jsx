import React from "react";
import './About.css';
import about_img from '../../Assets/about-img.jpg';
import play_icon from '../../Assets/play-icon.png'


const About = ({setPlayState}) =>{
    return(
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="" className="about-img"/>
                <img src={play_icon} alt="" className="play-icon" onClick={()=>
                    {setPlayState(true)}
                }/>
            </div>
            <div className="about-right">
                <h3>ABOUT OUR PRODUCT</h3>
                <h2>Experience the Natural Power of Bamboo & Citronella </h2>
                <p>Our products harness the power of nature to keep your feet healthy, fresh, and odor-free.</p>
                <p>Bamboo Socks - Ultra-soft, breathable, and moisture-wicking to prevent foot rot, irritation, and bacteria buildup. Say goodbye to sweaty feet and hello to all-day comfort!</p>
                <p>Citronella Oil - A natural antibacterial and antifungal solution that fights foot odor and infections, leaving your feet feeling refreshed and revitalized.</p>
                <p>At MMB's Hygienic Socks, we blend comfort, wellness, and sustainability to give you the best care for your feet—because every step matters.</p>
            </div>
        </div>
    )
}

export default About;
import React from "react";
import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";
import Innovator from "../Components/Innovator/Innovator";
import Showcase from "../Components/Showcase/Showcase";
import Contact from "../Components/Contact/Contact";

const Home = () =>{
    return(
        <div>
            <Hero />
            <Services />
            <Innovator />
            <Showcase />
            <Contact />
        </div>
    )
}

export default Home;
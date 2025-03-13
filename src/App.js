import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Title from './Components/Title/Title';
import Footer from './Components/Footer/Footer';
import Products from './Components/Products/Products';
import Innovator from './Components/Innovator/Innovator';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';


const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <About setPlayState={setPlayState}/>
      <Innovator />
      <Products />
      <div className='container'>
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  );
};

export default App;
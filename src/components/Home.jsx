import React from 'react';
import Navbar from './Navbar';

import homebannerbackground from '../assets/home-banner-background.png';
import homebannerimage from '../assets/home-banner-image.png';
import {FiArrowRight} from "react-icons/fi"

const Home = () => {
  return (
    

    <div className=" relative " id='home'>
      <Navbar />
      {/* Background Image */}
      <img
        src={homebannerbackground}
        alt="Background"
        className="absolute top-0 right-0 w-1/2 z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Your Favourite Food <br /> Delivered Hot & <br /> Fresh
          </h1>
          <p className="mt-4 text-gray-600">
            Healthy switcher chefs do all the prep work, <br />
            like peeling, chopping & marinating, so you can cook <br />
            a fresh meal in no time.
          </p>
         

<button className="mt-6 px-6 py-3 bg-amber-500 text-white rounded-full flex items-center justify-center gap-2 hover:bg-amber-600 transition">
  Order Now
  <FiArrowRight className="text-lg mt-1" />
</button>

        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={homebannerimage}
            alt="Banner"
            className="w-full max-w-md md:max-w-lg z-10"
          />
        </div>
      </div>
      
      
    </div>
    
    
    
  );
};

export default Home;

import React from 'react';
import aboutbackgroundimage from '../assets/about-background-image.png';
import aboutbackground from '../assets/about-background.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <div className="relative mt-20  "id='about'>
      {/* Background image */}
      <div className='flex items-center justify-center'>
      <img
        src={aboutbackground}
        alt="Background"
        className="absolute top-0 left-0 object-cover h-170 z-0"
      />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 max-w-7xl mx-auto gap-10 my-auto">
        {/* Left image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={aboutbackgroundimage}
            alt="About Visual"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>

        {/* Right content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Food Is An Important Part Of A Balanced Diet
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quis delectus vero placeat inventore esse praesentium, vitae dicta incidunt ex illo optio neque? Quia voluptatem, ipsam harum quo repellendus hic?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
            <button className="px-6 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition">
              Learn More
            </button>
            <button className="flex items-center gap-2 text-black hover:text-amber-600 font-semibold">
              <BsFillPlayCircleFill className="text-2xl" />
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

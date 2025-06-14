import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import johndoe from '../assets/john-doe-image.png';

const Testimonials = () => {
  return (
    <div className="mt-24 px-6 md:px-16 py-12 bg-gray-50" id='testimonials'>
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">What People Are Saying</h1>
        <p className="mt-6 text-gray-600 leading-relaxed">
          We make your food journey smooth and satisfying. Just follow three easy steps and enjoy hot, healthy meals without the hassle.
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="flex justify-center">
        <div className="bg-white max-w-xl w-full rounded-2xl shadow-md hover:shadow-lg transition p-8 text-center">
          <img
            src={johndoe}
            alt="John Doe"
            className="w-24 h-24 mx-auto mb-4 rounded-full object-cover "
          />
          <p className="text-gray-600 mb-6 leading-relaxed">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel fuga quos, quod sint officia, placeat,
            tempora aliquam eum fugit dolor distinctio eligendi quo temporibus asperiores ad."
          </p>
          <div className="flex justify-center mb-4 text-amber-400 text-xl">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} />
            ))}
          </div>
          <p className="text-lg font-semibold text-gray-800">John Doe</p>
          <span className="text-sm text-gray-500">Happy Customer</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

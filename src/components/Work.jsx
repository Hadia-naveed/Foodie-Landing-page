import React from 'react';
import chooseimage from '../assets/choose-image.png';
import pickmealsimage from '../assets/pick-meals-image.png';
import deliveryimage from '../assets/delivery-image.png';

const Work = () => {
  const options = [
    {
      image: pickmealsimage,
      title: 'Pick Meals',
      text: 'Choose your favorite meals from a wide variety of delicious options crafted by our chefs.',
    },
    {
      image: chooseimage,
      title: 'Choose How Often',
      text: 'Select your delivery frequency — daily, weekly, or monthly. We’re flexible to your routine.',
    },
    {
      image: deliveryimage,
      title: 'Fast Deliveries',
      text: 'Enjoy fast and fresh deliveries right to your doorstep — always on time, always hot.',
    },
  ];

  return (
    <div className="mt-24 px-6 md:px-16 py-12 bg-gray-50">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">How It Works</h1>
        <p className="mt-6 text-gray-600 leading-relaxed">
          We make your food journey smooth and satisfying. Just follow three easy steps and enjoy hot, healthy meals without the hassle.
        </p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {options.map((data, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
          >
            <img src={data.image} alt={data.title} className="w-32 h-32 object-contain mb-6" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{data.title}</h3>
            <p className="text-gray-600 text-sm">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

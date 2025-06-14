import React from 'react';

const Contact = () => {
  return (
    <div className="mt-24 px-6 md:px-16 py-12 bg-gray-50" id='contact'>
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
          Have Questions In Mind?
          <br />
          Let Us Help You
        </h1>
      </div>

      {/* Input Section */}
      <div className="flex justify-center">
        <div className="flex w-full max-w-md rounded-full overflow-hidden shadow-md">
          <input
            type="email"
            placeholder="yourmail@gmail.com"
            className="flex-1 px-6 py-3 outline-none text-gray-700"
          />
          <button className="bg-amber-500 text-white px-6 py-3 hover:bg-amber-600 transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

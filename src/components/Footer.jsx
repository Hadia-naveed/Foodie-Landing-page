import React from 'react';
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';
import Logo from "../assets/Logo.svg"

const Footer = () => {
  return (
    <div className="mt-24 px-6 md:px-16 py-12 bg-gray-100 text-gray-800">
      {/* Top Section: Logo & Social Icons */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        {/* Placeholder Logo */}
        <div className="mb-6 md:mb-0">
          <img src={Logo} alt="Logo" className="w-32" />
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl text-gray-600">
          <BsTwitter className="hover:text-amber-500 transition" />
          <SiLinkedin className="hover:text-amber-500 transition" />
          <BsYoutube className="hover:text-amber-500 transition" />
          <FaFacebookF className="hover:text-amber-500 transition" />
        </div>
      </div>

      {/* Bottom Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm text-center md:text-left">
        {/* Navigation Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg mb-2">Company</h3>
          <p>Quality</p>
          <p>Help</p>
          <p>Share</p>
          <p>Careers</p>
          <p>Work</p>
          <p>Testimonials</p>
        </div>

        {/* Contact Information */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <p>244-5333-7763</p>
          <p>hello@food.com</p>
          <p>press@food.com</p>
          <p>contact@food.com</p>
        </div>

        {/* Legal Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg mb-2">Legal</h3>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

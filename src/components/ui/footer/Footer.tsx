"use client";

import { message } from "antd";


const SubscriptionForm = () => {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    message.success("Thanks for connecting with us");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row w-full max-w-md mx-auto md:max-w-3xl"
    >
      <div className="relative flex-1">
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full px-4 py-3 rounded-l bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 placeholder-gray-500 text-gray-700 border border-pink-300"
        />
      </div>
      <button className="bg-pink-500 text-white px-6 py-3 rounded-r focus:outline-none hover:bg-pink-600">
        Subscribe
      </button>
    </form>
  );
};

const Footer = () => {
  return (
    <footer className=" bg-pink-50 flex items-center justify-between flex-col  ">
      <div className="text-4xl font-semibold text-center transition-transform transform hover:scale-105 text-pink-500 mt-5">
        Touch with Us
      </div>
      <div className="container mx-auto m-8">
        <div className=" p-6   flex flex-col items-center md:flex-row md:justify-between">
          <SubscriptionForm />
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
          <h3 className="text-xl font-semibold mb-2">About Us</h3>
          <ul className="">
            <li>About Dot-travel</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Policies</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
          <h3 className="text-xl font-semibold mb-2">Community</h3>
          <ul className="">
            <li>Diversity & Belonging</li>
            <li>Accessibility</li>
            <li>Dot-travel Associates</li>
            <li>Frontline Stays</li>
            <li>Guest Referrals</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
          <h3 className="text-xl font-semibold mb-2">Host</h3>
          <ul className="">
            <li>Host Your Home</li>
            <li>Host an Online Experience</li>
            <li>Message from CEO Brian Chesky</li>
          </ul>
        </div>
        {/* <div className="w-full md:w-1/2 lg-w-1/4 mb-4">
          <h3 className="text-xl font-semibold mb-2">Support</h3>
          <ul className="">
            <li>Our COVID-19 Response</li>
            <li>Help Center</li>
            <li>Cancellation options</li>
            <li>Neighborhood Support</li>
            <li>Trust & Safety</li>
          </ul>
        </div> */}
      </div>

      <div className="container mx-auto mt-8">
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="text-gray-400 text-center">
        &copy; {new Date().getFullYear()} Dot travel, Inc.
      </p>
    </footer>
  );
};

export default Footer;

"use client";
import { message } from "antd";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    message.success("Thanks for connecting with us");
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md m-4 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl text-center mb-4 font-semibold text-blue-600">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className="w-full border p-2 rounded-md "
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold p-2 rounded-md w-full hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

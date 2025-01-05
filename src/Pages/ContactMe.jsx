import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_79l2s6k", // Replace with your EmailJS service ID
        "template_mi0q76f", // Replace with your EmailJS template ID
        formRef.current,
        "1OrAZiBeDAEKnuDVV" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          e.target.reset();
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="space-x-4 border-black text-center w-fit mx-auto mt-24 px-6 py-4 border-[6px] text-xl font-bold my-12">
        <span>C O N T A C T</span> <span>M E</span>
      </div>
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Section: Email Form */}
          <div className="p-6 bg-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Send Me an Email
            </h2>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
            {status && <p className="mt-4 text-green-600">{status}</p>}
          </div>

          {/* Right Section: Contact Details */}
          <div className="p-6 bg-gray-500 text-white flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/+8801794051479" // Replace with your WhatsApp link
                  className="flex items-center space-x-2 hover:text-blue-300"
                >
                  <i className="fab fa-whatsapp"></i>
                  <span>WhatsApp: +880 1794 051479</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/takimul.nihal/" // Replace with your Facebook profile
                  className="flex items-center space-x-2 hover:text-blue-300"
                >
                  <i className="fab fa-facebook"></i>
                  <span>Facebook: Md Takimul Hasan Nihal</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:takimul3@gmail.com"
                  className="flex items-center space-x-2 hover:text-blue-300"
                >
                  <i className="fas fa-envelope"></i>
                  <span>Email: takimul3@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/md-takimul-hasan-nihal-7970341b5/" // Replace with your LinkedIn profile
                  className="flex items-center space-x-2 hover:text-blue-300"
                >
                  <i className="fab fa-linkedin"></i>
                  <span>LinkedIn: Md Takimul Hasan Nihal</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/takimul" // Replace with your GitHub profile
                  className="flex items-center space-x-2 hover:text-blue-300"
                >
                  <i className="fab fa-github"></i>
                  <span>GitHub: takimul</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

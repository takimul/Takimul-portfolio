import React from "react";

const TaskTradeDetails = () => {
  return (
    <div className="max-w-4xl mx-auto pt-20 p-6 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">TaskTrade 🛠️✨</h1>

      <a
        href="https://task-trade-77fc5.web.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        🌐 Live Site: https://task-trade-77fc5.web.app/
      </a>

      <h2 className="text-2xl font-bold mt-6">📌 Features</h2>
      <ul className="list-disc list-inside mt-2 space-y-2">
        <li>
          Browse Services: Explore a variety of services with detailed
          descriptions and provider information.
        </li>
        <li>
          Service Booking: Book services easily through an intuitive booking
          interface.
        </li>
        <li>
          Dashboard for Service Providers: Add, manage, and track services
          effortlessly.
        </li>
        <li>
          User Management: Secure login and registration for personalized user
          experiences.
        </li>
        <li>
          Theme Toggle: Switch between light and dark modes for a visually
          comfortable interface.
        </li>
        <li>
          Responsive Design: Fully optimized for all devices, ensuring a great
          user experience everywhere.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">🎯 Mission</h2>
      <p className="text-gray-700 mt-2">
        At TaskTrade, we aim to bridge the gap between service providers and
        customers by offering an all-in-one platform for streamlined service
        management and booking. Our mission is to empower individuals and
        businesses to efficiently manage services and create meaningful
        connections.
      </p>

      <h2 className="text-2xl font-bold mt-6">💡 Why Choose TaskTrade?</h2>
      <ul className="list-disc list-inside mt-2 space-y-2">
        <li>
          User-Friendly Interface: Simplified navigation and intuitive UI for
          all users.
        </li>
        <li>
          Dynamic Features: Tailored for both service providers and customers.
        </li>
        <li>
          Secure Experience: Safeguards user data with secure authentication and
          private routes.
        </li>
        <li>
          Customizable Theme: Enjoy light and dark modes based on your
          preferences.
        </li>
        <li>
          Comprehensive Tools: Manage, book, and explore services all in one
          place.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">📱 Responsive Design</h2>
      <p className="text-gray-700 mt-2">
        TaskTrade is designed to look and function beautifully across all
        devices, from desktops to smartphones. Whether you're booking services
        on the go or managing them from your office, TaskTrade has you covered.
      </p>

      <h2 className="text-2xl font-bold mt-6">⚙️ Technologies Used</h2>
      <div className="mt-2">
        <h3 className="font-semibold">Frontend</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>React Router</li>
        </ul>
        <h3 className="font-semibold mt-4">Backend</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Node.js</li>
          <li>Express.js</li>
        </ul>
        <h3 className="font-semibold mt-4">Database</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>MongoDB</li>
        </ul>
        <h3 className="font-semibold mt-4">Libraries and Tools</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>SweetAlert2 for alerts and error handling</li>
          <li>Context API for authentication and theme management</li>
        </ul>
        <h3 className="font-semibold mt-4">Hosting</h3>
        <p className="text-gray-700">
          Frontend: Firebase <br />
          Backend: Vercel
        </p>
      </div>
    </div>
  );
};

export default TaskTradeDetails;

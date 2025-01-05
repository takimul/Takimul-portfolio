import React from "react";

const TravelAsiaDetails = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-green-500 p-6 text-center text-white">
          <h1 className="text-3xl font-bold">Travel Asia</h1>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">🌐 Live Site</h2>
          <a
            href="https://travel-asia-8f892.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 underline hover:text-green-700"
          >
            Visit Travel Asia
          </a>
          <h2 className="text-xl font-bold mt-6 mb-4">📖 About the Site</h2>
          <p className="mb-4">
            <strong>Category:</strong> Southeast Asia
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Extensive Travel Guides:</strong> Explore detailed travel
              guides for Southeast Asian countries like Thailand, Vietnam, and
              Cambodia, covering essential travel tips, visa requirements, and
              cultural etiquette.
            </li>
            <li>
              <strong>Responsive Design:</strong> Fully optimized for desktops,
              tablets, and smartphones, providing a seamless viewing experience
              across all devices.
            </li>
            <li>
              <strong>Modern Design:</strong> Incorporates high-quality graphics
              and a cohesive color scheme to enhance user engagement.
            </li>
            <li>
              <strong>Intuitive Interface:</strong> Features a user-friendly
              layout that allows visitors to easily find information.
            </li>
            <li>
              <strong>Optimized Performance:</strong> Ensures fast loading
              times, reducing bounce rates and improving overall user
              satisfaction.
            </li>
          </ul>
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
      </div>
    </div>
  );
};

export default TravelAsiaDetails;

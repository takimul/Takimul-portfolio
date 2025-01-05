import React from "react";

const VolunteerAvenueDetails = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-500 p-6 text-center text-white">
          <h1 className="text-3xl font-bold">Volunteer Avenue</h1>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">🌐 Live Site</h2>
          <a
            href="https://volunteer-avenue.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Visit Volunteer Avenue
          </a>
          <h2 className="text-xl font-bold mt-6 mb-4">📖 About the Site</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Responsive Design:</strong> Optimized for all devices,
              ensuring a seamless experience on smartphones, tablets, and
              desktops.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> Intuitive navigation and
              easy-to-use features for both volunteers and organizers.
            </li>
            <li>
              <strong>Simple Profile Management:</strong> Easily create and
              update volunteer profiles with skills, interests, and
              availability.
            </li>
            <li>
              <strong>Quick Application Process:</strong> Fast and
              straightforward way for volunteers to apply to opportunities.
            </li>
            <li>
              <strong>Effective Communication:</strong> Built-in messaging and
              notifications to keep volunteers and organizers connected.
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

export default VolunteerAvenueDetails;

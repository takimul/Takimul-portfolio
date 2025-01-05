// import React from "react";

// const Projects = () => {
//   return (
//     <div className="bg-[url('https://i.ibb.co.com/s5MRh0T/wp4711657.jpg')] py-12">
//       <div className="space-x-4 border-black text-center w-fit mx-auto mt-24 px-6 py-4 border-[6px] text-white text-xl font-bold">
//         <span>P R O J E C T S</span>
//       </div>
//       <div className="flex">
//         <div className="max-w-sm mx-auto mt-10 shadow-lg rounded-lg overflow-hidden border border-gray-200">
//           {/* Image Section */}
//           <img
//             src="https://i.ibb.co.com/17FFw1L/Screenshot-2024-12-27-234943.jpg"
//             alt="Project"
//             className="w-full h-48 object-cover"
//           />
//           {/* Content Section */}
//           <div className="p-4 bg-gray-100 bg-opacity-75">
//             <h2 className="text-xl font-bold text-gray-800">Task Trade</h2>
//             <p className="text-gray-600 mt-2">
//               A brief description of the project goes here. It provides an
//               overview of the features or purpose.
//             </p>
//             {/* Button Section */}
//             <div className="mt-4 text-center">
//               <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300">
//                 View Details
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="max-w-sm mx-auto mt-10 shadow-lg rounded-lg overflow-hidden border border-gray-200">
//           {/* Image Section */}
//           <img
//             src="https://i.ibb.co.com/mhrYLbY/Screenshot-2025-01-04-184330.jpg"
//             alt="Project"
//             className="w-full h-48 object-cover"
//           />
//           {/* Content Section */}
//           <div className="p-4 bg-gray-100 bg-opacity-75">
//             <h2 className="text-xl font-bold text-gray-800">Travel Asia</h2>
//             <p className="text-gray-600 mt-2">
//               A brief description of the project goes here. It provides an
//               overview of the features or purpose.
//             </p>
//             {/* Button Section */}
//             <div className="mt-4 text-center">
//               <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300">
//                 View Details
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="max-w-sm mx-auto mt-10 shadow-lg rounded-lg overflow-hidden border border-gray-200">
//           {/* Image Section */}
//           <img
//             src="https://i.ibb.co.com/s94VtBs/Screenshot-2025-01-04-184515.jpg"
//             alt="Project"
//             className="w-full h-48 object-cover"
//           />
//           {/* Content Section */}
//           <div className="p-4 bg-gray-100 bg-opacity-75">
//             <h2 className="text-xl font-bold text-gray-800">
//               Volunteer Avenue
//             </h2>
//             <p className="text-gray-600 mt-2">
//               A brief description of the project goes here. It provides an
//               overview of the features or purpose.
//             </p>
//             {/* Button Section */}
//             <div className="mt-4 text-center">
//               <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300">
//                 View Details
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "TaskTrade",
    description: "A comprehensive service management platform.",
    image: "https://i.ibb.co/17FFw1L/Screenshot-2024-12-27-234943.jpg",
  },
  {
    id: 2,
    name: "Travel Asia",
    description: "Explore and book the best travel experiences.",
    image: "https://i.ibb.co/mhrYLbY/Screenshot-2025-01-04-184330.jpg",
  },
  {
    id: 3,
    name: "Volunteer Avenue",
    description: "Connect with volunteering opportunities worldwide.",
    image: "https://i.ibb.co/s94VtBs/Screenshot-2025-01-04-184515.jpg",
  },
];

const Projects = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/s5MRh0T/wp4711657.jpg')] py-12">
      <div className="text-center w-fit mx-auto mt-24 px-6 py-4 border-4 border-black text-black text-2xl font-bold">
        <span>P R O J E C T S</span>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            {/* Image Section */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            {/* Content Section */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">
                {project.name}
              </h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              {/* Button Section */}
              <div className="mt-4 text-center">
                <Link to={`/pages/${project.id}`}>
                  <button className="px-6 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

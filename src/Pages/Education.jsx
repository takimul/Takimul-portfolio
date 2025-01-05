// import React from "react";

// const Education = () => {
//   return (
//     <div>
//       <div className="bg-[url('https://i.ibb.co.com/yXMGnvf/360-F-298890723-gx-Zy7lj-KF1pv-Zc-GTpxx-UEKPm-VXo-F2e-CZ.jpg')] h-64 bg-no-repeat w-full bg-cover ">
//         asdsa
//       </div>
//     </div>
//   );
// };

// export default Education;

import React from "react";

const Education = () => {
  return (
    <div>
      <div className="space-x-4 border-black text-center w-fit mx-auto mt-24 px-6 py-4 border-[6px] text-xl font-bold my-12">
        <span>E D U C A T I O N</span>
      </div>
      {/* Background Image Section */}
      <div className="relative bg-[url('https://i.ibb.co/yXMGnvf/360-F-298890723-gx-Zy7lj-KF1pv-Zc-GTpxx-UEKPm-VXo-F2e-CZ.jpg')] h-96 py-96 bg-no-repeat w-full bg-cover flex items-center justify-center">
        {/* Transparent Card */}

        <div className="bg-white bg-opacity-80 text-gray-800 rounded-lg p-6 shadow-lg w-4/5 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Bachelor of Science in Computer Science & Engineering
          </h2>
          <p className="text-lg">
            <span className="font-semibold">Institution:</span> Daffodil
            International University
          </p>
          <p className="text-lg">
            <span className="font-semibold">CGPA:</span> 3.61
          </p>
          <p className="text-lg">
            <span className="font-semibold">Duration:</span> 2019 - 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;

// components/Card.js
import React from 'react';

const SkillsCard1 = () => {
  return (
    <div className="max-w-xs bg-white shadow-md rounded-md overflow-hidden mx-auto my-4 transition-shadow hover:shadow-2xl">
      <div className=" flex items-center justify-center mt-2"> 
        <img className="h-20 w-20 p-5 " src="/clipboard.png" alt="Card Image" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-center ">Organized</h2>
        <p className="text-gray-600 text-center ">High experience in graphic design, layouts, and editing has strengthend my abilities to execute plans in an efficient and neat manner</p>
      </div>
    </div>
  );
};

export default SkillsCard1;

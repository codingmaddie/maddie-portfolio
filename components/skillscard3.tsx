// components/Card.js
import React from 'react';

const SkillsCard3 = () => {
  return (
    <div className="max-w-xs bg-white shadow-md rounded-md overflow-hidden mx-auto my-4 transition-shadow hover:shadow-2xl">
      <div className=" flex items-center justify-center mt-2"> 
        <img className="h-20 w-auto p-5 " src="/idea.png" alt="Card Image" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-center ">Creativity</h2>
        <p className="text-gray-600 text-center ">Taking on various leadership roles generating creative solutions and approaches to tasks. Leveraging skills in communication, innovation, and problem solving </p>
      </div>
    </div>
  );
};

export default SkillsCard3;

// components/Card.js
import React from 'react';

const SkillsCard2 = () => {
  return (
    <div className="max-w-xs bg-white shadow-md rounded-md overflow-hidden mx-auto my-4 transition-shadow hover:shadow-2xl">
      <div className=" flex items-center justify-center mt-2"> 
        <img className=" w-20 p-5 " src="/search-file.png" alt="Card Image" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-center ">Detail Oriented</h2>
        <p className="text-gray-600 text-center ">With high attention to detail, problems of high intricacy are able to be effectively evaluated. Has the ability to thoroughly adress all areas of a task.</p>
      </div>
    </div>
  );
};

export default SkillsCard2;

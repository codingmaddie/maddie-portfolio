import React from 'react';

const HomeBackground = () => {
  return (
    <div className="h-200 w-full flex items-center justify-center bg-gradient-to-b from-blue-100 to-white">
      <div className="text-left">
        <div className="flex items-center ">
          <img className="h-25 w-25 mr-10" src="profile.png" alt="html Logo" />
          <div>
            <h1 className="text-5xl font-extrabold dark:text-white">
              Hello, <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">my name is</small>
            </h1>
            <h1 className="mt-4 text-7xl font-extrabold dark:text-white">Madeline Tang</h1>
            <p className="mt-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Welcome To My Portfolio</p>
            <div className="flex items-center justify-start mb-10">
              <div className="border-b-2 h-4 w-20 border-gray-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBackground;

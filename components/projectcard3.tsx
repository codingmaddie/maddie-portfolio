import React from 'react';


const ProjectCard3 = () => {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700transition-transform transform hover:scale-105 hover:shadow-xl ">
      <img className="object-cover w-full rounded-t-lg h-100 p-3 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="quakepic.png" alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Earthquake Detection Unit </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A software unit to detect simulated earthquakes from sensors to retrieve characteristics based on estimated initial magnitude and location of the earthquake</p>
        <div className="flex p-3">
            <img className="h-10 w-10 mr-3" src="javalogo.png" alt="html Logo" />
            <img className="h-10 w-10" src="UML.png" alt="UML Logo" />
            <img className="h-10 w-10 ml-4" src="bluejaylogo.png" alt="UML Logo" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard3;

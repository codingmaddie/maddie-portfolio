import React from 'react';


const ProjectCard1 = () => {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition-transform transform hover:scale-105 hover:shadow-xl ">
      <img className="object-cover w-full rounded-t-lg h-100 p-3 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="web.png" alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Web Developer Career Website</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A website about the web developer career that details the sample job titles and working conditions. The website gives insights into the job's outlook, academic requirements, and qualifiable skills.</p>
        <div className="flex">
            <img className="h-8 w-8 mr-3" src="html.png" alt="html Logo" />
            <img className="h-8 w-8" src="css-3.png" alt="css Logo" />
            <img className="h-8 w-8 ml-3" src="VScode.png" alt="css Logo" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard1;

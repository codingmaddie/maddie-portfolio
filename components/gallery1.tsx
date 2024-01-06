import React from 'react';

const Project1 = () => {
  return (
    <div className=" mb-6 flex items-center rounded-md bg-gray-100 shadow-md p-4">
      <div className="w-1/2 p-10">
        <video autoPlay loop muted className="w-full h-70 rounded-lg" poster="/webdemo-poster.jpg">
          <source src="/webdemo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-1/2 p-6">
        <h1 className="text-4xl font-bold mb-4">Web Developer Career Website</h1>
        <p className="mb-4">
          Designed using HTML and CSS, this website details various aspects of the website developer career. The homepage describes the job descriptions of various sample job titles and the 
          working conditions. The website describes the employment rates, average salaries, and job outlook in Ontario. Academic requirements of the career are included with links to recommended undergraduate programs. 
          
        </p>
        <ul className="list-disc ml-6">
          <li>Includes various links to external resources</li>
          <li>Functional navigation bar that routes to other web pages</li>
          <li>Complete with hover effects and transitions for a sleek look</li>
        </ul>
      </div>
    </div>
  );
};

export default Project1;



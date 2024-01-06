import React from 'react';

const Project2 = () => {
  return (
    <div className="mb-6 flex items-center p-6 bg-gray-100 rounded-md shadow-md">
      <div className="w-1/2 p-6">
        <h1 className="text-4xl font-bold mb-4">Earthquake Detection Unit</h1>
        <p className="mb-4">
          When appropriate text files are imported, earthquake simulations are ran and detected by sensors. Measured values of the simulated earthquakes are detected 
          at time of hit including the magnitude, initial location of the earthquakes epicenter, decay value, and spread rate. 
        </p>
        <ul className="list-disc ml-6">
          <li>Text files are imported through user input</li>
          <li>Software unit is structured through object oriented programming</li>
          <li>Designed based on fully hand-drawn UML diagram </li>
        </ul>
      </div>
      <div className="p-3 flex">
        <video autoPlay loop muted className=" h-60 rounded-lg" poster="/webdemo-poster.jpg">
          <source src="/quakedemo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img src="/umldiagram.png" className="p-3 w-full rounded-lg h-60" alt="Rotated Image" />
      </div>
    </div>
  );
};

export default Project2;

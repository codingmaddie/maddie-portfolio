import React from 'react';
import Project1 from './gallery1';
import Project2 from './gallery2';
import Project3 from './gallery3';
import Project4 from './gallery4';

const Gallery = () => {
  return (
    <div className="p-8 bg-gray-300">
      <h1 className=" mt-8 p-3 text-center text-3xl font-semibold">Gallery</h1>
      <div className="flex items-center justify-center mb-10">
          <div className="border-b-2 h-4 w-20 border-gray-500"></div>
      </div>
        <Project1 />
        <Project2/>
        <Project3 />
        <Project4 />
      </div>
  );
};

export default Gallery;



import React from 'react';
import Project1 from './gallery1';
import Project2 from './gallery2';
import Project3 from './gallery3';
import Project4 from './gallery4';
import ProjectCard1 from './projectcard1';
import ProjectCard2 from './projectcard2';
import ProjectCard3 from './projectcard3';
import ProjectCard4 from './projectcard4';

const Projects = () => {
    return (
        <div className="p-6">
        <h1 className=" p-6 text-center text-3xl font-semibold">Projects</h1>
        <div className="flex items-center justify-center mb-10">
            <div className="border-b-2 h-4 w-20 border-gray-500"></div>
        </div>


        <div className="flex items-center justify-center space-x-8 p-4">
            <ProjectCard1/>
            <ProjectCard2 />
        </div>
        <div className="flex items-center justify-center space-x-8 p-4 mb-10">
            <ProjectCard4 />
            <ProjectCard3/>
        </div>
         
        </div>


    );
};

export default Projects;

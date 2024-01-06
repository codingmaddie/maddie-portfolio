
import React from 'react';
import SkillsCard1 from './skillscard1'
import SkillsCard2 from './skillscard2'
import SkillsCard3 from './skillscard3'


const Skills = () => {
    return (
    <div className="p-3 bg-gray-200">
      <h1 className=" mt-8 p-3 text-center text-3xl font-semibold">Skills</h1>
      <div className="flex items-center justify-center mb-10">
          <div className="border-b-2 h-4 w-20 border-gray-500"></div>
      </div>
        <div className = "flex space p-6 ml-20 mr-20">
            <SkillsCard1 />
            <SkillsCard3 />
            <SkillsCard2 />
        </div>
    </div>



    );
  };
  
export default Skills;
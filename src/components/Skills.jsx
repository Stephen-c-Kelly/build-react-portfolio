import React from 'react'

const Skills = ({content}) => {
  // console.log('content from skills page',content)
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='w-full flex justify-center items-center flex-col mb-7'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center'>Skills</p>
        </div>
        
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {Object.entries(content?.fields.known_skills[0] || {}).map(([skill, description], index) => (
            <div key={index} className='flex flex-col items-center justify-center shadow-md bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md shadow-[#040c16] hover:scale-110 duration-500 h-full py-4'>
              <p>{description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;

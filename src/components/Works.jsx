import React from 'react'
import WorkItem from './WorkItem'

const Works = () => {

const projects = [
  {
    title: 'Whose in Charge?',
    description: 'Whose in Charge? is an online quiz game built to help you memorize the names of world leaders. ',
    demoUrl: 'https://world-leader-quiz.netlify.app',
    codeUrl: 'https://github.com/Stephen-c-Kelly/WorldLeaderQuiz/blob/main/README.md',
    backgroundImage: 'https://imgur.com/WpVLPEd'
  },
  {
    title: 'PartySYNC',
    description: 'Party SYNC lorem ipsum lorem ipsum lorem ipsum lorem ipsum. ',
    demoUrl: 'https://world-leader-quiz.netlify.app',
    codeUrl: 'https://github.com/Stephen-c-Kelly/WorldLeaderQuiz/blob/main/README.md',
    backgroundImage: 'https://imgur.com/WpVLPEd'
  }
]
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Work
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>
      {/* map of projects */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {projects.map((project, index)=>(
          <WorkItem key={index} {...project} />
        ))}
      </div>
      </div>


    </div>
  )
}

export default Works
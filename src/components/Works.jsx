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
          <p className='py-6 text-2xl'>{content?.fields.work_header}</p>
        </div>
      {/* map of projects */}
      {content?.fields.works.map((work,index)=>{
        return(
          <div style={{ backgroundImage: `url(${work.work_image})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          key={index}
          >
            {/* hover effect */}
          <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center mx-auto content-div'
            >
            <span className='text-lg font-bold text-white tracking-wider'>
              {work.work_title}
              </span>  
            <p className='text-center'>
              {work.work_description}
              </p>  
            <div className='pt-8 text-center'>
              <a href={work.github_url}>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'
                >
                  Demo
                </button>
              </a>
              <a href={work.demo_url}>
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Code
              </button>
              </a>
            </div>
          </div> 
        </div> 
        )
      })}
      {/* <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {projects.map((project, index)=>(
          <WorkItem key={index} {...project} />
        ))}
      </div> */}
    </div>
  </div>
  )
}

export default Works
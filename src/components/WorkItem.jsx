import React from 'react'

const WorkItem = (props) => { 

const { backgroundImage, title, description, demoURL, codeURL } = props

  return (
    <div
    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-blue-500'
    style={{ backgroundImage: `url(${backgroundImage})` }}
    
    // style={{ backgroundImage: `url(${backgroundImage})` }}
    // className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
    >
      {/* hidden content below */}

      <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
        <span className=' text-lg font-bold text-white tracking-wider'>
          {title}
        </span>
        <p className='text-center'>{description}</p>
        <div className='pt-8 text-center'>
          <a href={demoURL}>
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
              Demo
            </button>
          </a>
          <a href={codeURL}>
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default WorkItem
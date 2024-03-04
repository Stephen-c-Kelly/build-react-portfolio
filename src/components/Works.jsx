import React from 'react'

const Works = ({ content }) => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500 text-center'>
            Work
          </p>
          <p className='py-6 text-2xl text-center'>{content?.fields.work_header}</p>
        </div>
        {/* map of projects */}
        {content?.fields.works.map((work, index) => (
          <div key={index} style={{ backgroundImage: `url(${work.work_image})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-full mb-5">
            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center mx-auto p-4'>
              <span className='text-lg font-bold text-white tracking-wider text-center'>
                {work.work_title}
              </span>
              <p className='text-center'>
                {work.work_description}
              </p>
              <div className='pt-8 text-center'>
                <a href={work.github_url} target='_blank' rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href={work.demo_url} target='_blank' rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
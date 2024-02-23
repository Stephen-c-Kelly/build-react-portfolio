import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <div
      name='about'
      id='about'
      className='w-full h-screen bg-[#0a192f] text-gray-300'
    >
      <div className='flex flex col justify-center items-center w-full h-full'>
        <div className='py-16 rounded-md bg cyan-800 flex flex-col justify-center items-center w-4/6'>
          <div className='max-w-[1000px] w-full grid grid cols-2 gap-8 mb-4'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>
                About
              </p>
            </div>
            <div></div>
          </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>
              Hi, I'm Stephen Kelly. Please take a look around.
            </p>
          </div>
          <div>
            <p>
            {" "}
            Full-stack software engineer, customer success manager, and digital project director inspired by building products clients love. As a software developer, I'm passionately interested in developing software within a collaborative team that drives client success.
            </p>
          </div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight size={25} className='ml-3'/>
            </span>
          </Link>  

        </div>
        </div>
        <div>
        <img
          src={stephen}  
          alt="Image of Stephen Kelly"
          className="rounded-2xl mx-auto w-2/3 md:w-full"
        />
      </div>
      </div>


    </div>
  )
}

export default About
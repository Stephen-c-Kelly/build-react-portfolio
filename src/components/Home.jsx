import React from 'react'
import { HiArrowNarrowRight   }  from 'react-icons/hi'
import stephen from '../assets/stephen.png'
import { Link } from 'react-scroll'

const Home = () => {
return (
  <div
    name='home'
    className='h-screen w-full bg-[#0a192f]'
  >
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
      <div className='flex flex-col justify-center h-full'>
        <h2>Stephen Kelly is a Full Stack Developer, Client Services Expert, and Project Director</h2>
      <p className='text-gray-500 py-4 max-w-md'>
       With 10+ years working in creative technologies as both the client facing and project management lead, I’ve learned that aligning the goals of technical, creative, and client teams is the proven route to success. 
      </p>
      </div>


    </div>
      
      
  </div>
  )
}

export default Home
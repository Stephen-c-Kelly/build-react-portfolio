import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <div className='flex flex-col max-w-[600px] w-full'>
        <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
        <p className='text-gray-300 py-4'>Stephen.c.kelly@gmail.com</p>
        <p className='text-gray-300 py-4'>Or find me on <a href='https://www.linkedin.com/in/stephen-c-kelly-tech/'>Linkedin</a> or <a href='https://github.com/Stephen-c-Kelly'>Github</a></p>       
      </div>
    </div>
  )
}

export default Contact
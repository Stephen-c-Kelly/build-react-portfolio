import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <div className='flex flex-col max-w-[600px] w-full'>
        <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300 mb-4'>Contact</p>
        
        <h3 className='text-gray-300 leading-tight mb-2'><a href="mailto:Stephen.c.kelly@gmail.com">Stephen.c.kelly@gmail.com </a></h3>
        
        <h3 className='text-gray-300 leading-tight mb-2'>
          <a href='https://www.linkedin.com/in/stephen-c-kelly-tech/' className='text-blue-500 hover:text-blue-300 underline'>Linkedin</a>
        </h3>
        
        <h3 className='text-gray-300 leading-tight mb-2'>
          <a href='https://github.com/Stephen-c-Kelly' className='text-blue-500 hover:text-blue-300 underline'>Github</a>
        </h3>
        
        <h3 className='text-gray-300 leading-tight mb-2'>
          <a href='https://drive.google.com/file/d/1EZ_Kw9_e8Q26osneeZec4A4I0c-TorFC/view?usp=drive_link' className='text-blue-500 hover:text-blue-300 underline'>Resume</a>
        </h3>
                
      </div>
    </div>
  );
  
}

export default Contact
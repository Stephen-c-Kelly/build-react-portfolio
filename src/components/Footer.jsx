import React from 'react'
import buttery from '../assets/buttery.png'

let divisor = 5

const Footer = () => {
  return (
    <div className="bg-[#0a192f] text-gray-300 text-right p-4">
      
      <p className="inline align-middle">This portfolio was created with</p>
      <a href="https://buttercms.com/" target="_blank" rel="noopener noreferrer">
        <img src={buttery} alt="buttercms" className="inline mr-2 align-middle" style={{ width: `${972 / divisor}px`, height: `${243 / divisor}px` }} />
      </a>
    </div>
    
  );
};

export default Footer;
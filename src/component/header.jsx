import React from 'react';
import logo from '../img/batara-logo.png'

const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center mx-20 py-4'>
      <div>
        <img src={logo} alt="Logo Batara" height={70} width={200} />
      </div>
      <div className='flex gap-8 items-center'>
        <a href="#" className='text-sm font-normal'>HOME</a>
        <a href="#" className='text-sm font-normal'>SERVICE</a>
        <a href="#" className='text-sm font-normal'>ABOUT US</a>
        <a href="#" className='text-sm font-normal'>CAREER</a>
        <a href="#" className='text-sm font-normal'>BLOG</a>
        <a href="#" className='text-sm font-normal'>BATARA GURU AKADEMI</a>
      </div>
    </div>
  );
};

export default Header;
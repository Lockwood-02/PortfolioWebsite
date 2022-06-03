import React from 'react';
import FooterItem from './FooterItem';


function Footer() {
  return (
    <div className='py-5 bg-slate-800 text-center text-gray-300
        rounded-t-lg'>
        <a href="#hero" className='block text-xl md:text-2xl font-semibold'>Isaac Lockwood</a>
        <a href="mailto:isaaclockwood618@gmail.com"
            className=' text-sm md:text-md hover:text-indigo-500'
        >isaaclockwood618@gmail.com</a>
        {footer.map(footer => (
          <FooterItem
          key={footer.icon}
          icon=footer.icon}
          ></FooterItem>
        ))}
        <p className='text-xs mt-2 text-gray-500'>
            © Isaac Lockwood {new Date().getFullYear()}. All rights reserved.
        </p>
    </div>
  )
}

export default Footer

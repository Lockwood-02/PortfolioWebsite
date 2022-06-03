import React from 'react';
import FooterItem from './FooterItem';
import footer from '../data/footer';


function Footer() {
  return (
    <div className='py-5 bg-slate-800 text-center text-gray-300
        rounded-t-lg'>
        <a href="#hero" className='block text-xl md:text-2xl font-semibold'>Isaac Lockwood</a>
        <a href="mailto:isaaclockwood618@gmail.com" className=' text-sm md:text-md hover:text-indigo-500'
        >isaaclockwood618@gmail.com</a>
        <div className='flex justify-center mt-2 slate-300 gap-3 hover:text-gray-300'>
          {footer.map(footers => (
            <FooterItem
            key={footers.icon}
            icon={footers.icon}
            ></FooterItem>
          ))}
        </div>
        <p className='text-xs mt-2 text-gray-500'>
            © Isaac Lockwood {new Date().getFullYear()}. All rights reserved.
        </p>
    </div>
  )
}

export default Footer

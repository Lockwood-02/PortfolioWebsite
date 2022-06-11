import React from 'react'

function HeroSection() {
  return (
    <div id='hero' className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20 w-full text-center md:text-left'>
        <div>
            <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 
            text-indigo-600 font-semibold dark:text-indigo-500 sd:font-sans'>Hi, My Name is Isaac</h1>

            <h2 className='text-xl md:text-2xl mb-1 md:mb-3 
            text-gray-600 font-semibold dark:text-gray-300 sd:font-sans'>Software Engineer</h2>

            <p className='text-md max-w-md
              mb-3 text-gray-600 dark:text-gray-300'>
              “Intelligence is not a privilege, it's a gift. 
              And you use it for the good of mankind.”</p>
              <p className='text-sm max-w-md mb-5 
              text-gray-600 dark:text-gray-300 italic'>— Dr. Otto Octavius</p>

            <a href="#works" className='inline-block px-8 py-3 border-transparent
            text-base font-medium rounded-md text-white bg-indigo-600 
            hover:bg-indigo-700 md:text-md'>See Works</a>
        </div>

          <img className='h-4/12 w-full md:w-4/12 rounded-lg object-cover outline outline-offset-0 outline-indigo-500' 
          src='https://i.postimg.cc/Pxqwbmv6/itsMe.jpg' alt='Isaac Lockwood' />
    </div>
  )
}

export default HeroSection

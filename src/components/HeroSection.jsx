import React from 'react'

function HeroSection() {
  return (
    <div id='hero' className='flex items-center justify-center flex-col py-20'>
        <div className="text-center">
            <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 
            text-indigo-600 font-semibold dark:text-indigo-500'>Hi, My Name is Isaac</h1>
            <p className='text-md md:text-xl max-w-md
              mb-3 text-gray-600 dark:text-gray-300'>
              “Intelligence is not a privilege, it's a gift. 
              And you use it for the good of mankind.”</p>
              <p className='text-sm md:text-md max-w-md mb-5 
              text-gray-600 dark:text-gray-300 font-roboto-italic'>— Dr. Otto Octavius</p>
            <a href="#works" className='inline-block px-8 py-3 border-transparent
            text-base font-medium rounded-md text-white bg-indigo-600 
            hover:bg-indigo-700 md:text-md'>See Works</a>
        </div>
    </div>
  )
}

export default HeroSection

import React from 'react'
import SectionTitle from './SectionTitle'

function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center
    gap-10 md:gap-20 py-20'>
        <div className='w-full md:w-6/12'>
            <SectionTitle>About Me</SectionTitle>
            <p className='text-md text-gray-600 dark:text-gray-300'>
                Im a student at Western Kentucky University working on my 
                Masters degree in computer science. Coding was always something
                I was drawn towards since middle school, and now I have the knowledge
                to pursue further into the field. For now I like to create websites
                all with varying designs and ideas but I plan on becoming more of a 
                full stack engineer where I can truly show off my talents.
            </p>
    
            <br />
    
             <a target="_blank" href="https://i.postimg.cc/6psTfz6Q/Isaac-Lockwood-Resume-1.png"
                className='text-md md:text-lg 
                text-gray-700 dark:text-gray-300 underline 
                hover:text-indigo-500 dark:hover:text-indigo-500'>Download Resume</a>
        </div>
        
        <img src={"http://isaac-lockwood-demo.s3-website-us-east-1.amazonaws.com/images/me2.jpg"} alt="Isaac Lockwood" 
        className='w-full md:w-6/12 rounded-lg object-cover'/>
    </div>
  )
}

export default About

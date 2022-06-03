import React from 'react'

function FooterItem({icon, footerUrl}) {
  return (
    <a href={footerUrl} target='_blank' rel='noreferrer'>
       <div className='text-gray-300 w-6 h-6 mb-0 hover:indigo-500'>
           {icon}
       </div>
    </a>
  )
}

export default FooterItem

import React from 'react'

function FooterItem({icon, footerUrl}) {
  return (
    <a href={footerUrl} target='_blank' rel='noreferrer' className='hover:bg-gray-500 hover:rounded-bg-3'>
       <div className='text-gray-300 dark:text-gray-300 w-6 h-6 mb-0'>
           {icon}
       </div>
    </a>
  )
}

export default FooterItem

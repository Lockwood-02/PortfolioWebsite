import React from 'react'

function FooterItem({icon, footerUrl}) {
  return (
    <a href={footerUrl} target='_blank' rel='noreferrer'>
       <div className='text-gray-300 dark:text-gray-300 w-6 h-6 mb-3'>
           {icon}
       </div>
    </a>
  )
}

export default FooterItem

import React from 'react'
import LinkedIn from '../assets/linkedin.png'
import Facebook from '../assets/facebook.png'
import X from '../assets/x.png'
import Instagram from '../assets/instagram.png'
function SocialMediaIcons() {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
        <a
            className='hover:opacity-50 transition duration-500'
            href='https://www.linkedin.com'
            target='_blank'
            rel='noreferrer'
        >
            <img alt='linkedin-link' src={LinkedIn}/>
        </a>
        <a
            className='w-8  h-3 m-0 p-0 hover:opacity-50 transition duration-500'
            href='https://www.x.com'
            target='_blank'
            rel='noreferrer'
        >
            <img alt='linkedin-link' src={X}/>
        </a>
        <a
            className='hover:opacity-50 transition duration-500'
            href='https://www.facebook.com'
            target='_blank'
            rel='noreferrer'
        >
            <img alt='linkedin-link' src={Facebook}/>
        </a>
        <a
            className='color:white hover:opacity-50 transition duration-500'
            href='https://www.instragram.com'
            target='_blank'
            rel='noreferrer'
        >
            <img alt='linkedin-link' src={Instagram}/>
        </a>
    </div>
  )
}

export default SocialMediaIcons
import React from 'react'
import { IconBrandInstagram,IconBrandGmail,IconBrandLinkedin,IconBrandFacebook } from '@tabler/icons-react'
function Footer() {
  return (
    <div className='font-mono bg-gray-200 flex flex-col py-5  gap-4 px-4'>
      <h1 className='md:text-5xl text-red-900 font-bold  text-3xl mt-7'>Loved Our Work? Then,</h1>
        <h2 className='flex items-center text-bold font-mono justify-center underline md:text-5xl text-3xl text-gray-900'>
        Hire Us!
        </h2>
        <div className='flex md:flex-row flex-col justify-evenly mb-7'>
            <div className='font-bold  py-5'>
                Address:
                <p className='text-gray-600'>123 Main St, Anytown, USA 12345</p>
            </div>
            <div className='font-bold'>
                Social Links
                <span className='flex flex-row'>
                <IconBrandInstagram />
                <IconBrandGmail />
                <IconBrandLinkedin />
                <IconBrandFacebook />
                </span>
            </div>
        </div>
    </div>
  )
}

export default Footer

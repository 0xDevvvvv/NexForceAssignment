import React from 'react'

export default function About() {
  return (
    <div className='font-mono  flex flex-col items-center h-screen justify-center gap-4 px-4'>
        <hr className='w-1/2 border-4 border-black'/>
      <h1 className='md:text-5xl text-red-900 font-bold  text-3xl mt-5 '><u>About Us</u></h1>
        <p className='md:w-1/2 text-justify md:text-center md:px-1 px-4 my-5 '>
        Welcome to , where we do something really amazing. We're passionate about stuff that matters and are committed to making a difference in ways that are, well, super impactful.
Our team is made up of talented individuals who excel at doing things. Together, we work hard every day to achieve incredible goals and bring innovative solutions to the world.
With a focus on excellence, dedication, and probably coffee, we strive to be the best at what we do. And honestly, we're just getting started.

        </p>
    </div>
  )
}

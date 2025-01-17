
import React from 'react'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
export default function Testimonials() {
    const testimonials = [
        {
          quote:
            "Their team’s expertise and dedication are unmatched. They went above and beyond to deliver exactly what we needed.",
          name: "Sophia Bennett",
          designation: "Director of Operations at Stellar Enterprises",
          src: "/1.jpg",
        },
        {
          quote:
            "Working with them has been an absolute pleasure. They truly understand the meaning of customer-centric service.",
          name: "Olivia Turner",
          designation: "Founder at Apex Solutions",
          src: "/2.jpg",
        },
        {
          quote:
            "Their ability to adapt to our needs and provide tailored solutions was a game-changer for our business.",
          name: "Liam Parker",
          designation: "Business Strategist at Visionary Group",
          src: "/3.jpg",
        },
        {
          quote:
            "The level of professionalism and attention to detail is incredible. They exceeded all of our expectations.",
          name: "Ryan Mitchell",
          designation: "Project Manager at Elevate Enterprises",
          src: "/4.jpg",
        },
        {
          quote:
            "We couldn’t have asked for a better partner. Their services helped us achieve our goals faster than we imagined.",
          name: "Benjamin Harris",
          designation: "Managing Director at Growth Dynamics",
          src: "/5.jpg",
        },
      ];
      
  return (
    <div className='font-mono flex flex-col items-center justify-center gap-4 px-4'>
        <hr className='w-1/2 border-4 border-black'/>
      <h1 className='md:text-4xl text-3xl mt-5 '>Here it from our Customers!</h1>
        <AnimatedTestimonials testimonials={testimonials} autoplay={false} />
    </div>
  )
}

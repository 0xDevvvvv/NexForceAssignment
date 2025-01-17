
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
    // const testimonials = [
    //   {
    //     quote:
    //       "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    //     name: "Sarah Chen",
    //     designation: "Product Manager at TechFlow",
    //     src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   },
    //   {
    //     quote:
    //       "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    //     name: "Michael Rodriguez",
    //     designation: "CTO at InnovateSphere",
    //     src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   },
    //   {
    //     quote:
    //       "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    //     name: "Emily Watson",
    //     designation: "Operations Director at CloudScale",
    //     src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   },
    //   {
    //     quote:
    //       "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    //     name: "James Kim",
    //     designation: "Engineering Lead at DataPro",
    //     src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   },
    //   {
    //     quote:
    //       "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    //     name: "Lisa Thompson",
    //     designation: "VP of Technology at FutureNet",
    //     src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   },
    // ];
  
  return (
    <div className='font-mono bg-red-50 py-2 flex flex-col items-center justify-center gap-4 px-4'>
        <hr className='w-1/2 border-4 border-black'/>
      <h1 className='md:text-4xl text-center text-3xl mt-5 '>Here it from our Customers!</h1>
      <AnimatedTestimonials testimonials={testimonials}/>
    </div>
  )
}

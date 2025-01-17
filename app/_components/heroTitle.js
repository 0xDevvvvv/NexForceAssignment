"use client"
import React from "react";
import { FlipWords } from "../../components/ui/flip-words";

 
export function HeroTitle() {
    const AboutButton = () =>{
        return(
          <button className="bg-slate-800 sm:scale-50 md:scale-100 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block m-6">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span className="sm:text-lg text-3xs">
              <a href="#about" className="font-mono font-light"> Wanna know more? </a>
            </span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
        )
      }  
  const words = ["You Dream", "We Build"];
      //bg-cover bg-opacity-5 bg-[url('https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop')] 
  return (
    <div className="h-screen bg-gray-200 flex flex-col sm:flex-row  gap-8  justify-center items-center px-4" >
      <img className="rounded-lg shadow-2xl shadow-black  scale-75 sm:scale-100 sm:max-w-full" src="/nexforce.jpg" height="250" width="250"/>
      <div className="flex flex-col mx-3 font-normal text-neutral-600 dark:text-neutral-400">
      <div className="md:text-7xl text-red-900 font-bold text-4xl">TheCompany</div>
      <FlipWords className="text-4xl text-black" words={words} /> <br />
      <AboutButton />
      </div>
    </div>
    // <div>
    //   <div className="h-96 text-white text-center grid bg-cover bg-[url('https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop')]">
    //   <div className="col-start-1 row-start-1 bg-gray-800 bg-opacity-70 w-full h-full"></div>
    //   <div className="col-start-1 row-start-1 mx-auto my-auto">
    //   <div >
    //   <div>
    //     <div className="md:text-7xl text-4xl">Nexforce</div>
    //     <FlipWords className="text-4xl text-white" words={words} /> <br />
    //     </div>
    //     <AboutButton />
    //   </div>
    //   </div>
    //   </div>

    //   <div className="grid text-center text-black place-content-center min-h-[500px] relative isolate  after:absolute after:z-[-1] after:inset-0 after:bg-pink-700 after:opacity-90 after:bg-[url('https://images.unsplash.com/photo-1604050170221-aed634784f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80')] after:bg-top after:bg-cover ">
    //   <h1 className="font-semibold text-4xl tracking-wide">I have overlay</h1>
    //   <p className="text-xs text-center leading-tight">Overlay applied using pseudo CSS element. where parent css is position relative and then sudo class is applied as absolute positioned</p>
    //   </div>
    // </div>
  );
}
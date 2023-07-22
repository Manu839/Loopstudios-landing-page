import React from 'react'
import { motion, useReducedMotion } from "framer-motion";
import logo from '../assets/logo.png'
import hamburger from '../assets/hamburger.png'
import close from '../assets/close.png'

function Nav() {
    const shouldReduceMotion = useReducedMotion();
function navshow (){
  
  var x = document.getElementById("show");
  var y = document.getElementById("showe");
  var z = document.getElementById("hide");
if (x.style.display === "none") {
  x.style.display = "block";
  y.style.display = "block";
  z.style.display = "none"
} else {
  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "block"

}
}
  return (
    <div>

<div className="bg-[url('./assets/mobile1.jpg')] md:bg-[url('./assets/desktop1.jpg')] h-[670px] md:h-[800px]  md:w-screen bg-no-repeat">
      <nav className='flex pl-3 md:pl-0 justify-start w-full  sm:gap-48  pt-16  gap-12'>
        <img className='p-4 md:pl-16' src={logo} 
         ></img>
        <button onClick={navshow}  className='md:hidden'><img id='hide' className='md:hidden ' src={hamburger}></img>
        <img id='showe' className='hidden' src={close} ></img>
        </button>
        <div className="group inline-block  relative">

<ul id='show' className="absolute bg-black  my-10 -mx-52  md:flex md:-my-2 md:-mx-40 lg:-mx-1 xl:-mx-28 lg:left-10 xl:left-96 sm:left-6 ease-in-out md:shadow-none hidden  text-black font-semibold  shadow-md w-52 md:w-full z-20">
    <li className="">
        <a className=" hover:underline hover:scale-110 hover:duration-300  text-white py-6 px-6 block " href="/">Home</a>
    </li>
    
    <li className="">
    <a className="hover:underline hover:scale-110 hover:duration-300 text-white py-6 px-6 block" href="/">New</a>
    </li>
    
    <li className="">
        <a className=" hover:underline hover:scale-110 hover:duration-300 text-white py-6 px-6 block" href="/">Popular</a>
    </li>
    
    <li class="">
        <a className=" hover:underline hover:scale-110 hover:duration-300 text-white py-6 px-6 block" href="/">Trending</a>
    </li>
    
    <li class="">
        <a className=" hover:underline hover:scale-110 hover:duration-300 text-white py-6  px-6 block" href="/">Catagories</a>
    </li>
</ul>
</div>

      </nav>
      <div className='border-2 hover:scale-105 hover:duration-500 border-white my-32 p-8 md:w-fit md:ml-40 md:text-6xl text-white text-4xl ml-8 mr-8 '>
        <p>IMMERSIVE<br></br> EXPERIENCES<br></br> THAT DELIVER</p>
      </div>
    </div>

    </div>
  )
}

export default Nav
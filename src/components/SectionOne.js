import React from 'react'
import desktop2 from '../assets/desktop2.jpg'
import mobile2 from '../assets/mobile2.jpg'

function SectionOne() {
  return (
    <div>

<div className='md:flex'>
    <div className='pt-20 md:w-full md:pt-0 md:pl-40 text-center p-5'>
      <img className='md:hidden' src={mobile2}></img>
      <img  className=" md:block hidden" src={desktop2}></img>

    </div>
    <div className='md:-mx-72'>
    <div className='text-center pl-9 md:pl-4 md:pr-4 md:w-96 md:my-[260px] md:-mx-96 bg-white  pr-9'>
      <p className='text-2xl pt-6 pb-6 '>THE LEADER IN INTERACTIVE VR</p>
      <p className='text-gray-500  md:pb-5 '>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations hvae transformed businesses through digital experience that bind to their brand.</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default SectionOne
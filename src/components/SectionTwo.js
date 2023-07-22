import React from 'react'
import mobile3 from '../assets/mobile3.jpg'
import mobile4 from '../assets/mobile4.jpg'
import mobile5 from '../assets/mobile5.jpg'
import mobile6 from '../assets/mobile6.jpg'
import mobile7 from '../assets/mobile7.jpg'
import mobile8 from '../assets/mobile8.jpg'
import mobile9 from '../assets/mobile9.jpg'
import mobile10 from '../assets/mobile10.jpg'
import desktop3 from '../assets/desktop3.jpg'
import desktop4 from '../assets/desktop4.jpg'
import desktop5 from '../assets/desktop5.jpg'
import desktop6 from '../assets/desktop6.jpg'
import desktop7 from '../assets/desktop7.jpg'
import desktop8 from '../assets/desktop8.jpg'
import desktop9 from '../assets/desktop9.jpg'
import desktop10 from '../assets/desktop10.jpg'


function SectionTwo() {
  return (
    <div>


<div className='text-2xl text-center md:pt-0 md:flex md:gap-96  md:justify-center pt-20 md:pb-20 pb-5'>
      <p className='text-4xl hover:underline'>OUR CREATIONS</p>
      <button className='border-black md:block hidden border-2 p-2 pl-10 hover:bg-black hover:text-white pr-10 '>SEE ALL</button>
    </div>
    <div className='p-5 text-whie'>
      <div className='md:flex md:pl-24 md:pr-10 md:gap-20'>
      <div className='hover:scale-105 hover:duration-200'>
      <img className='md:hidden' src={mobile3}></img>
      <img className='hidden md:block' src={desktop3}></img>
      <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase  md:text-4xl font-extralight p-7 w-auto">DEEP EARTH</h2>
      </div>
      <div className='hover:scale-105 hover:duration-200'>
      <img className='md:hidden' src={mobile4}></img>
      <img className='hidden md:block' src={desktop4}></img>
      <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase  md:text-4xl font-extralight p-7 w-auto">NIGHT ARCADE</h2>
      </div>
      <div className='hover:scale-105 hover:duration-200'>
      <img className='md:hidden' src={mobile5}></img>
      <img className='hidden md:block' src={desktop5}></img>
      <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase  md:text-4xl font-extralight p-6 w-auto">SOCCER TEAM VR</h2>
      </div>
      <div className='hover:scale-105 hover:duration-200'>
      <img className='md:hidden' src={mobile6}></img>
      <img className='hidden md:block' src={desktop6}></img>
      <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase  md:text-4xl font-extralight p-7 w-1/2">THE GRID</h2>
      </div>
      </div>
      <div className='md:flex md:pt-8 md:pl-24 md:pr-10 md:gap-20'>
      <div className='hover:scale-110 hover:duration-200'>
      <img className='md:hidden' src={mobile7}></img>
      <img className='hidden md:block' src={desktop7}></img>
      <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase  md:text-4xl font-extralight p-3 w-auto">FROM UP ABOVE VR</h2>
      </div>
      <div className='hover:scale-105 hover:duration-200'>
      <img className='md:hidden' src={mobile8}></img>
      <img className='hidden md:block' src={desktop8}></img>
      <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase  md:text-4xl font-extralight p-7 w-auto">POCKET BOREALIS</h2>
      </div>
      <div className='hover:scale-105 hover:duration-200'>
      <img className='md:hidden' src={mobile9}></img>
      <img className='hidden md:block' src={desktop9}></img>
      <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase  md:text-4xl font-extralight p-7 w-auto">THE CURIOSITY</h2>
      </div>
      <div className='hover:scale-105 hover:duration-200'>
      <img className='md:hidden' src={mobile10}></img>
      <img className='hidden md:block' src={desktop10}></img>
      <h2 className="group-hover:text-black absolute bottom-0  text-white uppercase md:text-4xl font-extralight p-7 w-auto">MAKE IT FISHEYE</h2>
      </div>
      </div>
    </div>

    </div>
  )
}

export default SectionTwo
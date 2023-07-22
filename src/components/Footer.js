import React from 'react'
import logo from '../assets/logo.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import pinterest from '../assets/pinterest.png'
function Footer() {
  return (
    <div>
    <div className='text-center pb-20'>
      <button className='border-black md:hidden border-2 p-2 pl-10 hover:bg-black hover:text-white pr-10 '>SEE ALL</button>
    </div>
    <div className='md:flex xl:gap-80 md:gap-20 lg:gap-36 bg-black w-full'>
    <div className=''> 
    <div className='text-white bg-black md:w-full'>
      <img className=' p-8 ml-auto mr-auto'  src={logo}></img>
    </div>
    <div className='text-white bg-black md:flex md:gap-4 md:pl-20 lg:pl-44 text-center md:w-full '>
      <a className='hover:underline' href='/'>About</a><br></br>
      <a className='hover:underline' href='/'>Careers</a><br></br>
      <a  className='hover:underline' href='/'>Events</a><br></br>
      <a className='hover:underline' href='/'>Products</a><br></br>
      <a className='hover:underline' href='/'>Support</a><br></br>
    </div>
    </div>
    <div className='md:p-8'>
    <div className='bg-black justify-center flex md:w-full p-3 gap-6'>
    <img src={facebook}></img>
    <img src={twitter}></img>
    <img src={pinterest}></img>
    <img src={instagram}></img>
    </div>
    <div className='text-white md:pt-3 bg-black pb-8 md:w-full text-center'>
      <p>@ 2021 Loopstudios. All rights reserved.</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Footer
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:flex-row gap-14 my-10 mt-40  text-sm'>

              {/*------------------------------------left section------------------------------------*/}
                <div className='md-5 w-7  flex-col gap-2 flex-[3_1_0%] '>
                    
                      <img src={assets.logo} alt="" />
                      <br />
                      <p className=' w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ea alias architecto? Tenetur, totam reprehenderit, omnis atque nisi soluta nesciunt fuga corrupti aut, fugit error ipsum facilis magni quia? Unde!</p>
                </div>
        

              {/*------------------------------------middle section------------------------------------*/}
              <div className=' flex-[1_1_0%]'>
                   <p className='text-xl font-medium md-5'>COMPANY</p>
                   <br />
                   <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>HOME</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                   </ul>
              </div>
        

              {/*------------------------------------right section------------------------------------*/}
              <div className=' flex-[1_1_0%]'>
                <p className='text-xl font-medium md-5 '>GET IN TOUCH</p><br />
                
                <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>greatestackdev@gmail.com</li>
                </ul>
              </div>
        </div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ prescripto - All Right Reserved</p>
    </div>
  )
}

export default Footer
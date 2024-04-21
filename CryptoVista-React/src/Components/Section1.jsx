import React from 'react'
import  compologo from '../assets/Bg1.svg';
import { TypeAnimation } from 'react-type-animation';

function Section1() {
  return (
    <>
    <div className="flex  w-full bg-zinc-100 justify-between text-justify ">
          <div className="flex p-4 mx-auto ">
            <image src={compologo} alt="logo" />

          <div className="flex flex-col gap-y-10 mt-10 mx-[100px]">
            <div className="mt-9">
              <h2 className="font-bold text-richblack-900">Buy &amp; Swap Crypto Where You Track It</h2>
              <p className="font-light font-lg mt-10"><span className='text-orange-900'>Purchase crypto with card in just a few steps.</span> <span className='text-blue-700'>Then swap on best terms to keep up with trends.</span></p>
            </div>
          <button type="button" className="bg-orange-500 rounded-2xl text-richblack-700 w-[150px] h-[50px] p-3 text-lg mt-11" title="" data-cy="cs-button">Buy Crypto</button>
          <div>

          <TypeAnimation
      sequence={[
        'We Provide Tracking for cryptocurrency 🙏.',
        1000, 
        'We  Provide Management for Portfolio👈.',
        100,
        'We  Provide Transaction History 🙌.',
        1000,
        'We Provide Visualiaztion 👍.',
        1000
      ]}
      wrapper="span"
      speed={60}
      className='font-xl,flex flex-col,leading-[10px] flex-wrap text-sky-900'
      repeat={Infinity}
      />
      </div>
          </div>
          <div className="w-full h-full p-5 rounded-xl ">
            <img src="https://static.coinstats.app/onboarding/web/buy-swap-light.gif" className="gif" alt="gif-with-preloader" />
            </div>
          </div>
          </div>
    </>
  )
}

export default Section1
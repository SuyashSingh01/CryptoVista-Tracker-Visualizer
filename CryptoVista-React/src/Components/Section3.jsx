import React from 'react'

import { GiSevenPointedStar } from "react-icons/gi";

function Section3() {
  return (
    <div className="flex flex-col justify-center items-center flex-wrap glass shadow-lg w-11/12 p-5 mt-[90px] mb-[90px] bottom-8 rounded-2xl leading-relaxed ">
      <div className=" text-richblack-700 p-4 w-11/12">
        <div className='flex flex-col font-light gap-y-7 '>
          <h2 className=" text-rose-900 leading-9">All-In-One Crypto Tracker For Managing Your Crypto, DeFi &amp; NFT Assets</h2>
          <p className='text-xl text-blue-800' >We’re the only platform on the market that supports all major crypto platforms and DeFi protocols.</p>
        </div>
      </div>
      <div className="flex justify-around border-1 border-dashed border-black w-11/12">
        <div className='flex flex-wrap items-center justify-start ml-9 w-full py-3'>
          <div className="h-96 carousel carousel-vertical rounded-box">
            <div className="carousel-item h-full max-w-[550px] w-full">
              <img src="https://source.unsplash.com/collection/30965297/1600x900" alt="img" />
            </div>
            <div className="carousel-item h-full max-w-[550px]">
              <img src="https://source.unsplash.com/collection/2162397/1600x900" alt="img" />
            </div>
            <div className="carousel-item h-full max-w-[550px]">
            <img src="https://source.unsplash.com/collection/OReZLVEqFWI/1600x900"  alt="img"/>
            </div>
            <div className="carousel-item h-full max-w-[550px]">
              <img src="https://source.unsplash.com/collection/9644802/1600x900" alt="img" />
            </div>
            <div className="carousel-item h-full max-w-[550px]">
              <img src="https://source.unsplash.com/collection/8862830//1600x900" alt="img" />
            </div>
            <div className="carousel-item h-full max-w-[550px]">
              <img src="https://source.unsplash.com/collection/fXed_HCuuVA/1600x900" alt="img" />
            </div>
          </div>
        </div>

      <div className="flex flex-col p-5 leading-9 text-2xl font-loose gap-y-7">
          <div className="">
            <div className="text-green-600">
             <GiSevenPointedStar />
              <h4>300+ Wallets/Exchanges</h4>
            </div>
            <p className="text-2xl text-rich-black-700">Track everything wherever you keep it: Binance, Trust Wallet, and others.</p>
          </div>
          <div className="">
            <div className="text-green-600">
             <GiSevenPointedStar />
              <h4>1,000+ DeFi Protocols</h4>
            </div>
            <p className="text-2xl text-rich-black-700">Track and manage all your DeFi on 1000+ protocols and 10+ chains.</p>
          </div>
          <div className="">
            <div className="text-green-600">
            <GiSevenPointedStar />
              <h4>20,000+ Cryptocurrencies</h4>
            </div>
            <p className="text-2xl text-rich-black-700">Research, track, and manage any coin, set custom crypto alerts and more.</p>
            </div>
      </div>
      </div>
    </div>
  );
}

export default Section3;

import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";


function TrendingHeading({setQuery}) {
  const[Query ,setquery]=useState('');

  function changeHandler(e){
    console.log(Query);
    setquery(e.target.value);
  }
  return (
    <>
  <div className=' mt-10 font-bold text-3xl  w-11/12 h-30 bg-richwhite-50 rounded-lg shadow-md border text-center p-2 mx-auto ' >Crypto-Trending</div>

<div className='flex gap-x-4 justify-center items-center mt-10 '>
  <input 
  type="search" 
  value={Query}
  placeholder='Search'  
  onChange={changeHandler}
  className=' rounded-xl  py-2 border-yellow-2 ring-2 w-[600px] text-center'/>
  
  <button onClick={()=>setQuery(Query)}
  className="text-center text-sky-900 rounded-md font-bold hover:ring-3 text-3xl p-1 w-[30px]"><CiSearch /></button>
</div>

 

  </>
  )
}
export default TrendingHeading;
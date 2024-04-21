import React from 'react'
import Heading from './component/Heading';
import CoinSummaryPage from './component/CoinSummaryPage';
import './component/Crypto.css'

function Track() {
  return (
    <>
      <Heading heading={"CoinList"} />
      <div className='flex  flex-1 justify-center items-center text-richblack-900 '>
        <CoinSummaryPage />
      </div>
    </>
  );

};
export default Track;
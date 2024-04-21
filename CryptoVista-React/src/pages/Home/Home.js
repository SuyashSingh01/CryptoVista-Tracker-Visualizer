import Spline from '@splinetool/react-spline';
import { useEffect,useState } from 'react';
import Section1 from '../../Components/Section1';
import Section2 from '../../Components/Section2';
import source1 from '../../assets/source1.png';
import source2 from '../../assets/source2.png';

import source4 from '../../assets/source4.png';
import Section3 from '../../Components/Section3';
import Loader from './Loader';
// import  MyAccordion  from "./../../Components/MyAccordion";

function Home() {
  const [pageLoaded, setPageLoaded] = useState(false); 
  
  useEffect(() => {
   
    const timeout = setTimeout(() => {
      setPageLoaded(true);
    }, 3000); 
    return () => clearTimeout(timeout);
  }, []); 
  if(!pageLoaded){
    return(
      <div className='flex justify-center items-center h-screen w-screen backdrop-opacity-10 backdrop-invert bg-white/30'>
      <Loader/>
    </div>
  )
  }
  return (
    <>
    
      <div className='min-h-screen h-screen min-w-screen p-5 mx-auto flex items-center justify-center w-11/12'>
    <Spline scene="https://prod.spline.design/7dGMtHCsnP9ZjKtM/scene.splinecode" />
      </div>
      <div className="flex flex-1 justify-center items-center text-neutral-950 text-3xl flex-col">
        <Section1/>
      <div className='w-full bg-gradient-to-r from-purple-200 to-blue-200 flex flex-col justify-center p-7 '>

        <div className=" flex justify-center mx-16 flex-col mt-9 p-9 ">
          <h2 className="text-slate-900 font-bold ">The most trusted cryptocurrency exchange</h2>
          <p className=" text-red-700 font-relaxed leading-5 mt-12">
            We're the most trusted place for people and businesses to buy, sell, and manage crypto.</p>
        </div>

        <div className='flex gap-10 h-full rounded-xl items-start shadow-3xl mx-auto p-7 transition flex-wrap justify-center'>
            <Section2 source={source1} heading={"Security and Privacy"} description={"The platform implements robust security measures to protect users data and assets.Offers other feature the customers."}/>
            <Section2 source={source2} heading={"Price Tracking"} description={"The platform allows users to monitor the prices of various cryptocurrencies across multiple exchanges."}/>
            <Section2 source={source4} heading={"User-friendly Interface"} description={"Cryptovista prioritizes usability and design,offering a clean & Intuitive interface for users to navigate & access information easily."}/>
          </div>
        </div>
        <div className='flex flex-wrap w-full justify-center items-center bg-gradient-to-r from-blue-200 to-slate-100'>
        <Section3/>
        </div>
        {/* <div className='flex flex-wrap w-full justify-center items-center bg-gradient-to-l from-blue-200 to-white p-9'>
        <MyAccordion/>
        </div> */}
      </div>
    </>
  );
}

export default Home;

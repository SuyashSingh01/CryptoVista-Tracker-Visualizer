import React, { useContext } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { AiFillPlayCircle } from "react-icons/ai";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { SiEthereum } from "react-icons/si";
// import { BsInfoCircle } from "react-icons/bs";


import { TransactionContext } from "./context/Transactioncontext";
import etherlogo from '../../assets/ether_3D_logo.png';

import { toast } from 'react-toastify';
import Toast from 'react-hot-toast';
import LoadingRing from '../../Components/LoadingRing';
import CubeVideo from './components/CubeVideo';

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-red";

const Contact = ({ isLoggedIn }) => {
  const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading,transactions } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    if (!isLoggedIn) return Toast.error("Do Login First ");
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();


    if (!addressTo || !amount || !keyword || !message) return Toast.error("Field is Not completed !");

    sendTransaction();
  };

  function onClickHandler() {
 
    if (isLoggedIn===false) toast.error("Please Do Login For Transaction ");
    else {
      connectWallet(isLoggedIn);
    }

  }
  return (
   
    <div className='bg-slate-200 max-w-11/12'>

      {/* ----------------------------Transaction code-------------------------------------- */}

      <div className="flex w-full justify-center items-center">
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
          <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
            <h1 className="text-3xl sm:text-5xl text-black text-gradient py-2 leading-6">
    <TypeAnimation sequence={['Transferring Crypto Globally',1000,'Your Gateway to Worldwide',1000,]}
      wrapper="span"
      speed={60}
      className='font-xl,flex flex-col leading-[10px] flex-wrap text-rose-500'
      repeat={Infinity}
      /> <br /> 
      {/* <span className='text-emerald-800 leading-8'>Your Gateway to Worldwide</span> */}
       <br /><span className='text-blue-500'>Transactions</span>
            </h1>
            <TypeAnimation sequence={[
        'We Provide Tracking for cryptocurrency 🙏.',
        1000, 
        'We  Provide Management for Portfolio👈.',
        1000,
        'We  Provide Transaction History 🙌.',
        1000,
        'We Provide Visualiaztion 👍.',
        1000
      ]}
      wrapper="span"
      speed={60}
      className='font-xl,flex flex-col,leading-[10px] flex-wrap text-rose-900'
      repeat={Infinity}
      />
            <p className="text-left mt-5 text-black font-light md:w-9/12 w-11/12 text-base">
              Explore the crypto world. Buy and sell cryptocurrencies easily on CryptoVista .<br />
            </p>
            {!currentAccount && (
              <button
                type="button"
                onClick={onClickHandler}
                className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
              >
                <AiFillPlayCircle className="text-white mr-2" />
                <p className="text-black text-base font-semibold">
                  Connect Wallet
                </p>
              </button>
            )}

            <div className=" grid xs:grid-cols-3 grid-cols-2 w-[900px] mt-10 ">
              <div className={`rounded-tl-2xl  hover:bg-sky-100 text-richblack-900 transition-smooth  ${companyCommonStyles}`}>
                Reliability
              </div>
              <div className={`sm:rounded-tr-2xl  hover:bg-sky-100 text-richblack-900 transition-smooth ${companyCommonStyles}`}>Security</div>
              <div className={`sm:rounded-tr-2xl  hover:bg-sky-100 text-richblack-900 transition-smooth ${companyCommonStyles}`}>
                Ethereum Blockchain
              </div>
              <div className={`sm:rounded-bl-2xl  hover:bg-sky-100 text-richblack-900 transition-smooth ${companyCommonStyles}`}>
                Immutable
              </div>
              <div className={`sm:rounded-bl-2xl hover:bg-sky-100 text-richblack-900 transition-smooth${companyCommonStyles}`}>Low Fees</div>
              <div className={`rounded-br-2xl  hover:bg-sky-100 text-richblack-900 transition-smooth ${companyCommonStyles}`}>
                Web 3.0
              </div>
            </div>
          </div>

          <div className="flex scroll-smooth flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
            {/* <div className='h-full w-[500px] border-5 border-sky-900'>
            <CubeVideo/>
            </div> */}
            <div className=''>
              <img src={etherlogo} alt="etherlogo" className="w-45 h-40  hover:scale-110" />
            </div>
            {/*------------------------------------------ above are for image tag addition ----------------------- */}
            {/*  -----------------Transaction section-------------------------- */}
            <div className='border-zinc-400 isolate aspect-video w-96 backdrop-blur-xl bg-white/50  shadow-lg ring-1 ring-black/5 rounded-xl'>
              <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism bg-richblack-400">
                <h1 className="text-black text-lg font-semibold">Send Crypto</h1>

                <div className="flex flex-col w-full">
                  <label htmlFor="" className="w-full">
                    <p className="text-[0.875rem] text-richblack-600 mb-1 leading-[1.375rem]">
                      Address To <sup className="text-pink-200">*</sup></p>
                  </label>

                  <input
                    value={formData.addressTo}
                    placeholder="Address To"
                    type='text'
                    name='addressTo'
                  
                    className="text-sm bg-richblack-700 my-2 p-2  rounded-[0.75rem] w-full text-richblack-5"
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label htmlFor="" className="w-full">
                    <p className="text-[0.875rem] text-richblack-600 mb-1 leading-[1.375rem]">
                      Amount (ETH) <sup className="text-pink-200">*</sup></p>
                  </label>
                  <input
                    value={formData.amount}
                    placeholder="Amount (ETH)"
                    type='number'
                    name='amount'
                    step="0.0001"
                    // className="my-2 w-full rounded-xl p-2  outline-none text-gray-900 bg-slate-400 border-none text-sm white-glassmorphism  "
                    className="text-sm bg-richblack-700 my-2 p-2  rounded-[0.75rem] w-full text-richblack-5"

                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label htmlFor="" className="w-full">
                    <p className="text-[0.875rem] text-richblack-600 mb-1 leading-[1.375rem]">
                      Add Note <sup className="text-pink-200">*</sup></p>
                  </label>
                  <input
                    value={formData.keyword}
                    placeholder='Keyword'
                    type='text'
                    name='keyword'
                    // className="my-2 w-full rounded-xl p-2 outline-none text-gray-900 bg-slate-400 border-none text-sm white-glassmorphism "
                    className="text-sm bg-richblack-700 my-2 p-2  rounded-[0.75rem] w-full text-richblack-5"

                    onChange={handleChange}
                  />
                </div>
                <input
                  value={formData.message}
                  placeholder="Enter Message"
                  type='text'
                  name='message'
                  className="my-2 w-full rounded-xl p-2 outline-none text-black font-semibold border-none text-sm white-glassmorphism  bg-transparent"
                  onChange={handleChange}
                />
                <div className="h-[1px] w-full bg-gray-600 my-2" />
              </div>

              {isLoading
                ? <LoadingRing/>
                : (
                  <div className='flex justify-center align-center'>

                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="text-white  mt-1 mb-2 border-[1px] p-2 w-[200px] bg-[#2952e3] hover:bg-[#2546bd] border-[#688ae0] rounded-full cursor-pointer"
                    >
                      Send now
                    </button>
                    {/* <Popconfirm title="Are you sure To Make Transaction ?" okText="Yes" cancelText="No">
                    <Button  onClick={handleSubmit} className="mt-1 mb-2 border-[1px] p-2 w-[200px] bg-[#2952e3] hover:bg-[#2546bd] border-[#688ae0] rounded-full cursor-pointer text-xl text-center">Send</Button>
                  </Popconfirm> */}
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------------------endpoint --------------------------------- */}
    </div>
  );
}
export default Contact;

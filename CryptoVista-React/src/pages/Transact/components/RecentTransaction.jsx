import React, { useEffect, useContext, useState } from 'react';
import {Table, Tag } from 'antd';
import { TransactionContext } from '../context/Transactioncontext';
import { AiFillPlayCircle } from "react-icons/ai";


const columns = [
  {
    title: 'From',
    dataIndex: 'addressFrom',
    key: 'addressFrom',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'To Address',
    dataIndex: 'addressTo',
    key: 'addressTo',
  },
  {
    title: 'Date',
    key: 'timedstamp',
    dataIndex: 'timestamp',
  },
  {
    title: 'Tags',
    key: 'keyword',
    dataIndex: 'keyword',
    render: (_, { keyword }) => (
      <>
        <Tag color={keyword.length > 5 ? 'geekblue' : 'green'}>
          {keyword.toUpperCase()}
        </Tag>
      </>
    ),
  },
  {
    title: 'Message',
    key: 'message',
    dataIndex: 'message',
    render: (_, { message }) => (
      <>
        <Tag color={message.length > 5 ? 'geekblue' : 'green'}>
          {message.toUpperCase()}
        </Tag>
      </>
    ),
  },
];

const App = () => {
  const { transactions,currentAccount,checkIfWalletIsConnect,connectWallet} = useContext(TransactionContext);
  const [data, setData] = useState([]);
  const [connected , setConnected] = useState(false);

  useEffect(() => {
    if(checkIfWalletIsConnect)setConnected(true);
    transactions.then(d => {
      setData(d);
    }).catch(e => {
      console.log(e);
    });
  }, [transactions]);
  if(connected){
    return <div className='w-full glass backdrop-opacity-10 text-richblack-800 flex flex-col flex-wrap justify-center items-center shadow-lg rounded-md bg-slate-200 p-4'>
      No Transaction Found 
      <div className='flex justify-center items-center '>
            {!currentAccount && (
              <button
              type="button"
              onClick={()=>connectWallet(true)}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-1 rounded-full cursor-pointer hover:bg-[#2546bd]"
              >
                <AiFillPlayCircle className="text-white mr-2" />
                <p className="text-black text-base font-semibold">
                  Connect Wallet
                </p>
              </button>
            )}
        </div>
    </div>
  }

  return (
    <div className='w-full glass backdrop-opacity-10 shadow-lg rounded-md bg-slate-400'>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default App;

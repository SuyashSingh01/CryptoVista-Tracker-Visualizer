import React, { createContext,useEffect, useState } from "react";
import  {ethers}  from "ethers";
import { contractABI, contractAddress } from "../utils/Constant";
import {toast} from "react-toastify";

export const TransactionContext = createContext();
const { ethereum } = window;


const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
  
  return transactionsContract;
};

export const TransactionsProvider = ({ children }) => {
  
  const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  const [transactions, setTransactions] = useState([]);

  // const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
  


  function handleChange (e, name){
    setformData(prevState => {
      return { 
        ...prevState, 
        [e.target.name]: e.target.value,
      }
    });
  };

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        
        const availableTransactions = await transactionsContract.getAllTransactions();
        
        const structuredTransactions= availableTransactions.map((transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseInt(transaction.amount._hex) / (10 ** 18)
        }));   
        
        console.log("availabelT",availableTransactions);
        console.log("TransactionBeforSet",structuredTransactions);
        // setTransactions(structuredTransactions);
        return structuredTransactions;
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      
      const accounts = await ethereum.request({ method: "eth_accounts" });
      
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        
        const result=await getAllTransactions();
        toast.success("MetaMask Account Connected",accounts[0]);
        return 1;
      } else {
        console.log("No accounts Connected");
        return 0;
      }
    } catch (error) {
      toast.error("No accounts found",error.message);
      console.log(error);
      return 0;
    }
  };
const checkIfTransactionsExists = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        const currentTransactionCount = await transactionsContract.getTransactionCount();
        console.log("june",currentTransactionCount);
        window.localStorage.setItem("transactionCount", currentTransactionCount);
      }
    } catch (error) {
      console.log("error",error.message);
      throw new Error("No ethereum object");
    }
  };

  const connectWallet = async (isLoggedIn) => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      if(!isLoggedIn){
        console.log("inside the Transaction context",isLoggedIn);
       
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts", });

      setCurrentAccount(accounts[0]);
      // window.location.reload();
      window.scroll({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
      
    } catch (error) {
      console.log("this is error coming during metamask connection",error);

      throw new Error("No ethereum object");
    }
  };

  const sendTransaction = async () => {
    try {
      if (ethereum) {
        const { addressTo, amount, keyword, message } = formData;
        const transactionsContract = createEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [{
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount._hex,
          }],
        });

        const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        toast.success("Transaction Successfulled");
        setIsLoading(false);

        const transactionsCount = await transactionsContract.getTransactionCount();

        setTransactionCount(transactionsCount.toNumber());
     
        window.scroll({
          top: 100,
          left: 100,
          behavior: "smooth",
        });
      } 
      else {
        console.log("No ethereum object");
      }
    } 
    catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
    checkIfTransactionsExists();

    setTransactions(getAllTransactions());
  }, [transactionCount]);

  const value={
      transactionCount,
      connectWallet,
      transactions,
      currentAccount,
      isLoading,
      sendTransaction,
      handleChange,
      formData,
  };
  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};

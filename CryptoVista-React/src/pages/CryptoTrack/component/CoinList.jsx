import React, { useEffect, useState, useContext } from "react";
import coinGecko from "../api/coinGecko";
import { WatchListContext } from "../context/WatchListContext";
import SingleCoin from "./SingleCoin";
import LoadingRing from "../../../Components/LoadingRing";
import SkeletonComponent from '../../../Components/SkeletonComponent';
import toast from "react-hot-toast";


const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const { watchList, deleteCoin } = useContext(WatchListContext);

  const [isLoading, setIsLoading] = useState(false);
  // console.log("coins in coinList: ",coins);
  // console.log(watchList);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      window.onoffline = (event) => {
        console.log("The network connection has been lost.");
        toast.error(`The network connection has been lost`);
      };
      const response = await coinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(","),
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };

    if (watchList.length > 0) {
      fetchData();
    } else setCoins([]);
  }, [watchList]);

  const renderCoins = () => {
    if (isLoading) {
      return (<>
      <LoadingRing/>
      <SkeletonComponent loading={isLoading}/>
      </>
      );
    }

    return (
    <div>
      
      {isLoading?
      <div className="flex justify-center items-center text-center">
      <span className="loading loading-ring loading-xs"></span>
      <span className="loading loading-ring loading-sm"></span>
      <span className="loading loading-ring loading-md"></span>
      <span className="loading loading-ring loading-lg"></span></div> :
          <ul className=" flex flex-col min-h-screen ">
            <div className="rounded-lg max-w-[1280px] shadow-lg p-4 text-center bg-slate-300 hover:bg-slate-200 transition-colors mb-11">
              {coins.map((coin) => {
                  return (
                    <div className="p-3 w-11/12">
                    <SingleCoin key={coin.id} coin={coin} deleteCoin={deleteCoin} />
                   </div>
                  )
                }
              )}
            </div>
          </ul>
      }
    </div>
    );
  };

  return <div>{renderCoins()}</div>;
};

export default CoinList;

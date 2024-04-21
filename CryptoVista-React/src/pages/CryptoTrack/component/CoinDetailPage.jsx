
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HistoryChart from "./HistoryChart";
import CoinData from "./CoinData";
import coinGecko from "../api/coinGecko";
// import Spinner from "../../../Components/Spinner";
import { Skeleton } from "antd";
import Heading from "./Heading";
import { toast } from "react-toastify";

export const CoinDetailPage = () => {
  
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

const fetchData = async () => {
      setIsLoading(true);
      try{
      const [day, week, year, detail] = await Promise.all([
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "7",
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "365",
          },
        }),
        coinGecko.get("/coins/markets/", {
          params: {
            vs_currency: "usd",
            ids: id,
          },
        }),
      ]);
    setCoinData({
      day: formatData(day.data.prices),
      week: formatData(week.data.prices),
      year: formatData(year.data.prices),
      detail: detail.data[0],
    });
    console.log("coindata",coinData);
  }catch(error){
      console.log("Error Fetching Data",error);
      return;
    }
    finally  {
    setIsLoading(false);
    }
};

  useEffect(() => {
    fetchData();
  }, []);

  console.log("This is coinDATa:",coinData);
  const renderData = () => {
    if (isLoading||!coinData.detail) {
      return <div className="flex flex-col gap-y-9 items-center justify-center py-9 w-11/12 mt-9 mb-9 mx-auto">
        <h1 className="text-lg text-richblack-900">Loading...</h1>
        <Skeleton/>
        <Skeleton/>
      </div>;
    }
    return (
      <div className="w-11/12 flex flex-col galss gap-9 justify-center p-9 flex-wrap ">

        <Heading heading={`Price Chart Of ${coinData.detail.name}`} />
        <HistoryChart data={coinData} />
        <div className="shadow-sm rounded-lg bg-zinc-200 w-full flex flex-wrap flex-col justify-center items-center p-4 my-7 mt-11 mb-11">
          <img className="max-w-[300px]" src={coinData.detail.image} alt="coin img"  />
          <h1 className="text-3xl font-bold p-4 text-sky-600 underline">Coin {coinData.detail.name}</h1>
        <div className="w-full mx-auto p-8">
        <CoinData data={coinData.detail} />
        </div>
        </div>
     

      </div>
    );
  };

  return (
  <div className='flex flex-col justify-center items-center'>{renderData()}</div>
  )
};

export default CoinDetailPage;

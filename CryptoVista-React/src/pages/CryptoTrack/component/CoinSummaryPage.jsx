import React from "react";
import AddCoin from "../component/AddCoin";
import CoinList from "../component/CoinList";

const CoinSummaryPage = () => {
  console.log("inside the coinsummarypage file");

  return (
  <div className=" w-screen flex justify-center items-center">

    <div className="flex flex-col w-[1180px] mx-5 p-4 mt-9 gap-y-8">
      <AddCoin />
      <CoinList />
    </div>
  </div>
  );
};

export default CoinSummaryPage;
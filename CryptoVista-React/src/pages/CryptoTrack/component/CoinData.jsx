import React from "react";

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="bg-slate-200 shadow-blue-300 shadow-lg mt-3 p-4 rounded-lg border-solid row text-lg mb-3">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-lg coin-data-category text-teal-600">Market Cap</span>
              <span>{data.market_cap}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className=" text-lg coin-data-category text-teal-600">
                Total Supply
              </span>
              <span>{data.total_supply}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className=" text-lg coin-data-category text-teal-600">Volume(24H)</span>
              <span>{data.total_volume}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-lg coin-data-category text-teal-600">high 24h</span>
              <span>{data.high_24h}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className=" text-lg coin-data-category text-teal-600">
                Circulating Supply
              </span>
              <span>{data.circulating_supply}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className=" text-lg coin-data-category text-teal-600">low 24h</span>
              <span>{data.low_24h}</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;

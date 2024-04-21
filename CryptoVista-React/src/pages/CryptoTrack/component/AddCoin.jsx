import React, { useState, useContext } from "react";
import { WatchListContext } from "../context/WatchListContext";

const AddCoin = () => {
  const [isActive, setIsActive] = useState(false);
  const { addCoin } = useContext(WatchListContext);
  const availableCoins = [
    "bitcoin",
    "ethereum",
    "ripple",
    "tether",
    "bitcoin-cash",
    "litecoin",
    "eos",
    "okb",
    "tezos",
    "algorand",
    "quant-network",
    "cardano",
    "jupiter-exchange-solana",
    "coredaoorg",
    "lido-dao",
    "rocket-pool-eth",
    "sei-network",
    "beam-2",
    "mantle-staked-ether",
    "ethena",
    "flow",
  ];

  const handleClick = (coin) => {
    addCoin(coin);
    setIsActive(false);
  };

  return (
    <div className=" text-richblack-900 dropdown">
      <button
        onClick={() => setIsActive(!isActive)}
        className="bg-sky-400 hover:bg-sky-300 p-3 rounded-lg shadow-lg dropdown-toggle"
        type="button"
      >
        Add Coin
      </button>
      <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
        {availableCoins.map((el, index) => {
          return (
            <a
              key={index}
              onClick={() => handleClick(el)}
              href="#"
              className="dropdown-item"
            >
              {el}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AddCoin;

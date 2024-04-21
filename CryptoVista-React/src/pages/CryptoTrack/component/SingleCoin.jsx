import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SingleCoin = ({ coin, deleteCoin }) => {
  console.log("singlecoinid: ", coin.id);
  const navigate = useNavigate();
  return (
    <div className=" w-full flex flex-wrap border-3 rounded-lg border-sky-200">
      <NavLink to={`/coins/${coin.id}`} className=" w-full p-3 flex justify-evenly backdrop-blur-xl bg-white/50 shadow-xl rounded-lg min-w-[373px]">

        <div className=" card text-richblack-900 flex justify-content-between items-center text-dark  border-2 border-double  border-gray-100 shadow-md mt-4 p-3 backdrop-blur-xl bg-white/50 flex-1 w-70 my-3">

          <li className="coinlist-item list-group-item list-group-item-action flex items-center justify-between flex-wrap">
            <img className="coinlist-image" src={coin.image} alt="" />
            <span className="capitalize hover:uppercase">{coin.id}</span>
            <span className="text-decoration-none">{coin.current_price}</span>

            <span
              className={
                coin.price_change_percentage_24h < 0
                  ? "text-danger mr-2"
                  : "text-success mr-2"
              }>
              {" "}
              {coin.price_change_percentage_24h < 0 ? (
                <i className="fas fa-sort-down align-middle mr-1"></i>
              ) : (
                <i className="fas fa-sort-up align-middle mr-1"></i>
              )}
              {coin.price_change_percentage_24h}
            </span>
          </li>
        </div>
        <button className="btn glass text-red-600 mt-10 ml-3 " onClick={(e) => {
          e.preventDefault();
          deleteCoin(coin.id);
          }}>Delete
        </button>
        <button className="btn glass text-blue-600 mt-10 ml-2 " onClick={() => { navigate(`/coins/${coin.id}`) }}>Visual</button>
      </NavLink>
    </div>
  );
};

export default SingleCoin;

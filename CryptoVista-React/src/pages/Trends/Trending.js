
import React, { useState, useEffect } from "react";

import NewsCard from "./component/NewsCard";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

import TrendingHeading from "./component/TrendingHeading";
import toast from "react-hot-toast";
import SkeletonTrends from "./component/SkeletonTrends";

const API_KEY = process.env.REACT_APP_NEWS_API;

// console.log("Api",API_KEY);
const url = "https://newsapi.org/v2/everything?q=";



function Trending() {
  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState('flase');
  const [query, setQuery] = useState('Cryptocurrency');

  const gotoTopHandler = () => {
    console.log("Goto Top");;
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }
  async function fetchNews(query) {

    setloading(true);
    window.onoffline = (event) => {
      toast.error(`The network connection has been lost`);
    };
    try {
      const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setArticles(data.articles);
      // console.log('Apinews',API_KEY);
      console.log('TrendingData is coming before:', data);
    }
    catch (e) {
      toast.error(e.message);
      setArticles([]);
      setQuery('Cryptocurrency')
    }
    setloading(false);
    // console.log("data is:"+articles);
  }
  useEffect(() => {
    setloading('true')
    fetchNews(query);
    setloading('false');
  }, [query]);
  
  // ?
  console.log('TrendingData is coming After :', articles);
  if (!articles || !articles.length) {
    return <div className="flex items-center justify-center mb-9">
      <SkeletonTrends />
    </div>; 
  }

  return (
    <>
      <TrendingHeading setQuery={setQuery} />
      <div className="flex flex-wrap justify-center items-center ml-10 gap-4 w-11/12 mt-10 my-36">
        {loading ? (<div className="flex justify-center items-center mt-14 mb-10">
          <SkeletonTrends /></div>
        ) :
          (
            articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))
          )}
        <div className="position fixed bottom-10 mb-10 right-5 z-10 bg-slate-900 text-white font-semibold p-2 rounded-lg text-center">
          <button className=" text-justify" onClick={gotoTopHandler}>
            <FaArrowUp />
            Top
          </button>
        </div>
      </div>
    </>
  );
}
export default Trending;

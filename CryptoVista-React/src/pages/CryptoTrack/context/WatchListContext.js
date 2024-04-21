import { createContext, useState } from "react";
import { useEffect } from "react";

export const WatchListContext=createContext();

export default function WatchListContextProvider({children}){
    

    const [watchList, setWatchList] = useState(
        localStorage.getItem("watchList")?.split(",") || [
          "bitcoin",
          "ethereum",
          "ripple",
          "litecoin",
        ]
      );

      useEffect(() => {
        localStorage.setItem("watchList", watchList);
      }, [watchList]);
    
      const deleteCoin = (coin) => {
        setWatchList(
          watchList.filter((el) => {
            return el !== coin;
          })
        );
      };
    
      const addCoin = (coin) => {
        if (watchList.indexOf(coin) === -1) {
          setWatchList([...watchList, coin]);
        }
      };
    const value={
        watchList, 
        deleteCoin,
        addCoin 
    };
    return <WatchListContext.Provider value={value} >
        {children}
        </WatchListContext.Provider>; 
}
